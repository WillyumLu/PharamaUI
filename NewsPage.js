import React from "react";
import { CardItem, Container, Content, Icon, Text, View } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { Card, Button } from 'react-native-elements'

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

                    <View style={styles.greetingView }>
                        <Text style={{color:'green', fontSize:22, alignSelf: "center"}}>Welcome Back!</Text>

                        <Text>
                            <Icon type="FontAwesome" name="newspaper-o" size={20} />
                            <Text style={{color:'green', fontSize:16, alignSelf: 'center'}}>   Here's Your Update on Varient:</Text>
                        </Text>
                    </View>
                    <Card>
                                <Text style={{ flex: 1, flexWrap: "wrap", fontSize:15}}>
                                    <Icon type="FontAwesome5" name="clipboard-list" />
                                    <Text style={styles.highlightedText}> {this.state.newPatient_GeneOfInterest} new patients </Text>
                                    registered to Varient claiming a diagnosis with your gene of interest.
                                </Text>
                    </Card>
                    <Card>
                        <Text style={{ flex: 1, flexWrap: "wrap", fontSize:15}}>
                            <Icon type="FontAwesome5" name="clipboard-list" />
                            <Text style={styles.highlightedText}> {this.state.newPatient_ExactVariant} new patients </Text>
                            registered to Varient claiming a diagnosis with your exact genetic variant
                        </Text>
                    </Card>
                    <Card>
                        <Text style={{ flex: 1, flexWrap: "wrap", fontSize:15}}>
                            <Icon type="FontAwesome5" name="clipboard-list" />
                            <Text style={styles.highlightedText}> {this.state.updatedPatient_ExactVariant} new patients </Text>
                            with your exact genetic variant have updated their medication data.
                        </Text>
                    </Card>
                    <Button
                        style={{marginVertical: windowDim.height * 0.2, alignSelf: "center" }}
                        icon={
                            <Icon type="Entypo" name="news" />
                        }
                        onPress={this.navigateToTreatmentPage}
                        title=" View New Data"
                    />
                </Content>
            </Container>
        );
    }
}

const windowDim = Dimensions.get('window');
const styles = StyleSheet.create({
    greetingView: {
        marginHorizontal: windowDim.width * 0.14,
        marginTop: windowDim.height * 0.03,
        marginBottom: windowDim.height * 0.001
    },
    greetingText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    highlightedText: {
        color: "green",
        fontSize: 20
    }
});

export default NewsPage; 
