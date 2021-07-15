import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Header, Content, Button, Icon, Text } from "native-base";

const styles = StyleSheet.create({
  intro: {
    fontSize: 25,
    paddingBottom: 30,
    textAlign: "center",
    //alignItems: "center"
    //paddingLeft: 10,
    //paddingRight: 10
  },
  gene: {
    fontSize: 25,
    fontWeight: "bold",
  },
  genebtn: {
    fontWeight: "bold",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 5,
    marginRight: 5,
  },
  /*    layout:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
    }*/
});

class TreatmentPage extends React.Component {
  /*
    constructor(props){
        super(props)
        this.state={
            gene : this.props.navigation.getParams('gene'),
            uniqueGene : this.props.navigation.getParams('uniqueGene')
        }
    }
*/

  render() {
    return (
      <View style={styles.layout}>
        <Container style={styles.layout}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "green",
              textAlign: "center",
              top: 0,
              paddingBottom: 50,
            }}
          >
            Pick the trial data that you want to view
          </Text>
          {/* First display*/}
          <View style={{ paddingBottom: 25 }}>
            <Text style={styles.intro}>
              Your variant is in the gene <Text style={styles.gene}>GRIN1</Text>
            </Text>

            <Button
              iconLeft
              style={{
                backgroundColor: "green",
                borderRadius: 100,
                alignSelf: "center",
              }}
              onPress={() =>
                this.props.navigation.navigate("Gene1", { gene1: "GRIN1" })
              }
            >
              <Icon type="MaterialIcons" name="people" />
              <Text>
                View all <Text style={styles.genebtn}>GRIN1</Text> patient data
              </Text>
            </Button>
          </View>
          {/*Second display*/}
          <View style={{ paddingTop: 50 }}>
            <Text style={styles.intro}>
              Your unique variant within GRIN1 is{" "}
              <Text style={styles.gene}>c.1666C>T</Text> patient data{" "}
            </Text>

            <Button
              iconLeft
              style={{
                alignSelf: "center",
                backgroundColor: "green",
                borderRadius: 100,
              }}
              onPress={() =>
                this.props.navigation.navigate("Gene2", {
                  gene2: "GRIN1",
                  variant: "c.1666C>T",
                })
              }
            >
              <Icon type="MaterialCommunityIcons" name="dna" />
              <Text>
                view GRIN1 <Text style={styles.genebtn}>c.1666C>T</Text> patient
                data
              </Text>
            </Button>
          </View>
        </Container>
      </View>
    );
  }
}

export default TreatmentPage;
