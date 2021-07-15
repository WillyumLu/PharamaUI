import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Icon,
  Accordion,
  Text,
} from "native-base";
import { FlatList, ScrollView } from "react-native-gesture-handler";

class TreatmentGene1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gene: this.props.route.params?.gene1 ?? "not found",
    };
  }

  //Hardcoded this data for now

  treatmentList = () => {
    let treatments = ["Lamotrigine", "Topiramate", "Memantine"];
    let displayTreatments = [];
    for ( let count = 1; count <= treatments.length; count++) {
      displayTreatments.push({
        count: String(count),
        content: treatments[count - 1],
      });
    }
    return displayTreatments;
  };

  getImprovedNumber = (symptom) => {
    //Hardcoded this part for demonstration
    switch (symptom) {
      case "Lamotrigine":
        return 2;
      case "Topiramate":
        return 9;
      case "Memantine":
        return 5;
    }
  };

  getTotalNumber = (symptom) => {
    //Hardcoded this part for demonstration
    switch (symptom) {
      case "Lamotrigine":
        return 5;
      case "Topiramate":
        return 10;
      case "Memantine":
        return 15;
    }
  };

  getPercentage = (symptom) => {
    return this.getImprovedNumber(symptom) / this.getTotalNumber(symptom);
  };

  getComment = (symptom) => {
    // Check this more!!!!!
    if (this.getPercentage(symptom) < 0.5) {
      return "red";
    }
    return "green";
  };

  getGreenWidth = (percentage) => {
    return 100 * percentage;
  };

  getRedWidth = (percentage) => {
    return 100 - this.getGreenWidth(percentage);
  };

  generateTreatmentList = () => (
    <FlatList
      renderItem={(obj) => (
        <View style={{}}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                padding: 10,
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              {obj.item["count"]}. {obj.item["content"]}
            </Text>
            <View style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
              <View
                style={{
                  width: this.getGreenWidth(
                    this.getPercentage(obj.item["content"])
                  ),
                  height: 15,
                  backgroundColor: "lime",
                  borderColor: "gray",
                  borderWidth: 0.5,
                }}
              />
              <View
                style={{
                  width: this.getRedWidth(
                    this.getPercentage(obj.item["content"])
                  ),
                  height: 15,
                  backgroundColor: "red",
                  borderColor: "gray",
                  borderWidth: 0.5,
                }}
              />
            </View>
          </View>

          <View style={{}}>
            <Text style={{ padding: 10 }}>
              {this.getImprovedNumber(obj.item["content"])}/
              {this.getTotalNumber(obj.item["content"])} patients' symptoms has
              improved
            </Text>
            <Text
              style={{
                padding: 10,
                color: this.getComment(obj.item["content"]),
              }}
            >
              (
              {String(
                this.getPercentage(obj.item["content"]).toFixed(2) * 100
              ) + "%"}
              )
            </Text>
          </View>
        </View>
      )}
      data={this.treatmentList()}
    />
  );

  symptomList = () => {
    return ["Epilepsy", "Hypotonia", "Spasticity"];
  };

  generateDataArray = () => {
    let symptoms = this.symptomList();
    let dataList = [];
    let symptom;
    for (symptom of symptoms) {
      dataList.push({ title: symptom, content: this.generateTreatmentList() });
    }
    return dataList;
  };

  _renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          margin: 5,
          alignItems: "center",
          backgroundColor: "#A9DAD6",
        }}
      >
        <Text style={{ fontWeight: "bold", paddingRight: 3 }}>
          {" "}
          {item.title}
        </Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  };

  _renderContent = (item) => {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
          margin: 5,
        }}
      >
        {item.content}
      </Text>
    );
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Content padder style={{ backgroundColor: "white" }}>
            <Text
              style={{ padding: 20, justifyContent: "center", fontSize: 30 }}
            >
              <Icon type="MaterialIcons" name="group" />
              Your variant is in the gene{" "}
              <Text
                style={{ color: "green", fontWeight: "bold", fontSize: 30 }}
              >
                {this.state.gene}
              </Text>
            </Text>
            <Text
              style={{ padding: 20, justifyContent: "center", fontSize: 20 }}
            >
              Patients with{" "}
              <Text
                style={{ fontSize: 20, color: "green", fontWeight: "bold" }}
              >
                {this.state.gene}
              </Text>{" "}
              disorders have these symptoms, and have tried these generic
              medications:
            </Text>

            <Accordion
              dataArray={this.generateDataArray()}
              animation={true}
              expanded={true}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              style={{ borderColor: "white" }}
            />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default TreatmentGene1;
