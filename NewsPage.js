import React from "react";
import { Button, Card, CardItem, Container, Content, Icon, Text, View } from "native-base";
import { Dimensions, StyleSheet } from "react-native";

class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPatient_GeneOfInterest: 0,
            newPatient_ExactVariant: 1,
            updatedPatient_ExactVariant: 2
        };
    }

    navigateToTreatmentPage = () => {
        this.props.navigation.navigate("Treatment");
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.greetingView}>
                        <Text style={styles.greetingText}>
                            Welcome back.{"\n"}
                            Here's an update on your variant.
                        </Text>
                    </View>
                    <Card transparent>
                        <CardItem style={{ marginVertical: windowDim.height * 0.025 }}>
                            <Icon type="AntDesign" name="exception1" />
                            <Text style={{ flex: 1, flexWrap: "wrap" }}>
                                <Text style={styles.highlightedText}>{this.state.newPatient_GeneOfInterest} new patients </Text>
                                registered to Varient claiming a diagnosis with your gene of interest.
                            </Text>
                        </CardItem>
                        <CardItem style={{ marginVertical: windowDim.height * 0.025 }}>
                            <Icon type="AntDesign" name="exception1" />
                            <Text style={{ flex: 1, flexWrap: "wrap" }}>
                                <Text style={styles.highlightedText}>{this.state.newPatient_ExactVariant} new patients </Text>
                                registered to Varient claiming a diagnosis with your exact genetic variant.
                            </Text>
                        </CardItem>
                        <CardItem style={{ marginVertical: windowDim.height * 0.025 }}>
                            <Icon type="AntDesign" name="exception1" />
                            <Text style={{ flex: 1, flexWrap: "wrap" }}>
                                <Text style={styles.highlightedText}>{this.state.updatedPatient_ExactVariant} patients </Text>
                                with your exact genetic variant have updated their medication data.
                            </Text>
                        </CardItem>
                    </Card>
                    <Button warning style={{ marginVertical: windowDim.height * 0.05, alignSelf: "center" }} onPress={this.navigateToTreatmentPage}>
                        <Text>View new data</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const windowDim = Dimensions.get('window');
const styles = StyleSheet.create({
    greetingView: {
        marginHorizontal: windowDim.width * 0.05,
        marginTop: windowDim.height * 0.1,
        marginBottom: windowDim.height * 0.05
    },
    greetingText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    highlightedText: {
        color: "#ff0000"
    }
});

export default NewsPage; 
