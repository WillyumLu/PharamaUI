import React from "react";
import {View, StyleSheet} from "react-native";
import {Container, Header, Content, Icon, Text} from "native-base";
import {Card, Button} from 'react-native-elements'

const styles = StyleSheet.create({
    intro: {
        fontSize: 20,
        paddingBottom: 15,
        textAlign: "center",
        //alignItems: "center"
        //paddingLeft: 10,
        //paddingRight: 10
    },
    gene: {
        fontSize: 27,
        fontWeight: "bold",
        color: 'green'
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
                <Container style={styles.layoupt}>
                    <Content>
                        <View style={{paddingTop: 70, paddingBottom: 50, alignSelf:'center'}}>

                            <Text
                                style={{
                                    fontSize: 28,
                                    fontWeight: "bold",
                                    color: "green",
                                    textAlign: "center",
                                    top: 0,
                                }}
                            ><Icon type="Fontisto" name="test-bottle"/>   Pick the trial data that
                            </Text>
                            <Text
                                style={{
                                    fontSize: 28,
                                    fontWeight: "bold",
                                    color: "green",
                                    textAlign: "center",
                                }}
                            > you want to view
                            </Text>
                        </View>

                        {/* First display*/}
                        <View style={{paddingBottom: 20}}>
                            <Card>
                                <Text style={styles.intro}>
                                    Your variant is in the gene <Text style={styles.gene}>GRIN1</Text>
                                </Text>
                                <Card.Divider/>
                                <Button
                                    type='clear'
                                    icon={
                                        <Icon
                                            type="MaterialIcons"
                                            name="people"
                                        />
                                    }
                                    onPress={() =>
                                           this.props.navigation.navigate("Gene1", {gene1: "GRIN1"})}
                                    titleStyle={{color:'green', fontSize:18}}
                                    title="view GRIN1 c.1666C>T patient data"
                                />
                                {/*<Button*/}
                                {/*    variant="outline"*/}
                                {/*    iconLeft*/}
                                {/*    style={{*/}
                                {/*        alignSelf: "center",*/}
                                {/*        backgroundColor: "green",*/}
                                {/*    }}*/}
                                {/*    onPress={() =>*/}
                                {/*        this.props.navigation.navigate("Gene1", {gene1: "GRIN1"})*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    <Icon type="MaterialIcons" name="people"/>*/}
                                {/*    <Text>*/}
                                {/*        View all <Text style={styles.genebtn}>GRIN1</Text> patient data*/}
                                {/*    </Text>*/}
                                {/*</Button>*/}
                            </Card>
                        </View>
                        {/*Second display*/}
                        <View style={{paddingTop: 50}}>
                            <Card>
                                <Text style={styles.intro}>
                                    Your unique variant within GRIN1 is{" "}
                                    <Text style={styles.gene}>c.1666C>T</Text> patient data{" "}
                                </Text>
                                <Card.Divider/>

                                <Button
                                    type='clear'
                                    icon={
                                        <Icon
                                            type="MaterialCommunityIcons"
                                            name="dna"
                                        />
                                    }
                                    onPress={() => this.props.navigation.navigate("Gene2")}
                                    titleStyle={{color:'green', fontSize:18}}
                                    title="view GRIN1 c.1666C>T patient data"
                                />
                                {/*<Button*/}
                                {/*    iconLeft*/}
                                {/*    style={{*/}
                                {/*        alignSelf: "center",*/}
                                {/*        backgroundColor: "green",*/}
                                {/*    }}*/}
                                {/*    onPress={() =>*/}
                                {/*        this.props.navigation.navigate("Gene2", {*/}
                                {/*            gene2: "GRIN1",*/}
                                {/*            variant: "c.1666C>T",*/}
                                {/*        })*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    <Icon type="MaterialCommunityIcons" name="dna"/>*/}
                                {/*    <Text>*/}
                                {/*        view GRIN1 <Text style={styles.genebtn}>c.1666C>T</Text> patient*/}
                                {/*        data*/}
                                {/*    </Text>*/}
                                {/*</Button>*/}
                            </Card>
                        </View>
                    </Content>
                </Container>
            </View>
        );
    }
}

export default TreatmentPage;
