import React from "react";
import {
    List,
    Container,
    Content,
    Button,
    ListItem,
    Text,
    Icon,
    Left,
    Body,
    Right,
    Picker
} from 'native-base';
import {Col} from 'react-native-easy-grid';
import {Image, StyleSheet, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import InfoPage from "./InfoPage";

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        textAlign: "center",
        position: 'absolute',
        top: 2
    },
    userImage: {
        margin: 10,
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "white"
    },
});

class SettingPage extends React.Component {
    state = {
        userName: "Alice",
        userImage: "https://i.pinimg.com/originals/ce/5d/03/ce5d0338d3cb37c097e49e40ca458a49.jpg",
        userAge: 19,
        userPassword: "",
        showToast: false,
        notification: null,
        privacy: null
    }

    render() {
        return (
            <Container>
                <Col style={{width: "100%", height: 180, alignItems: "center", justifyContent: 'center'}}>
                    <Button transparent onPress={this.pickImage}  style={{alignSelf:'center'}}>
                        {this.state.userImage &&
                        <Image
                            style={styles.userImage}
                            source={{uri: this.state.userImage,}}>
                        </Image>}
                    </Button>
                </Col>
                <Content>
                    <List>
                        {/*username*/}
                        <ListItem icon>
                            <Left>
                                <Icon name='people' style={{color: 'gray'}}/>
                            </Left>
                            <Body>
                                <Text>User Name: </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.changeUserName()}
                                        style={{color: 'blue'}}>
                                    <Text>{this.state.userName}</Text>
                                    <Icon name="arrow-forward"/>
                                </Button>
                            </Right>
                        </ListItem>
                        {/*password*/}
                        <ListItem icon>
                            <Left>
                                <Icon name='lock' style={{color: 'gray'}}/>
                            </Left>
                            <Body>
                                <Text>password: </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.changePassword()}
                                        style={{color: 'blue'}}>
                                    <Text>{'*******'}</Text>
                                    <Icon name="arrow-forward"/>
                                </Button>
                            </Right>
                        </ListItem>

                        {/*age*/}
                        <ListItem icon>
                            <Left>
                                <Icon name='ios-information-circle' style={{color: 'gray'}}/>
                            </Left>
                            <Body>
                                <Text>age: </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.changeUserAge()}
                                        style={{color: 'blue'}}>
                                    <Text>{this.state.userAge}</Text>
                                    <Icon name="arrow-forward"/>
                                </Button>
                            </Right>
                        </ListItem>

                        {/*notification*/}
                        <ListItem icon>
                            <Left>
                                <Icon name='notifications' style={{color: 'gray'}}/>
                            </Left>
                            <Body>
                                <Text>Notifications: </Text>
                            </Body>
                            <Right>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="notification"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.notification}
                                    onValueChange={(v)=>{this.setState({notification: v})}}
                                >
                                    <Picker.Item label="voice and wave" value="voice and wave" />
                                    <Picker.Item label="only wave" value="only wave" />
                                    <Picker.Item label="silence" value="silence" />
                                </Picker>
                            </Right>
                        </ListItem>

                        {/*privacy*/}
                        <ListItem icon>
                            <Left>
                                <Icon name='hand' style={{color: 'gray'}}/>
                            </Left>
                            <Body>
                                <Text>Privacy: </Text>
                            </Body>
                            <Right>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Privacy"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.privacy}
                                    onValueChange={(v)=>{this.setState({privacy: v})}}
                                >
                                    <Picker.Item label="visible to others" value="visible to others" />
                                    <Picker.Item label="invisible to others" value="invisible to others" />
                                    <Picker.Item label="visible to doctors" value="visible to doctors" />
                                </Picker>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <InfoPage/>
            </Container>
        );
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setImage(result.uri);
        }
    };

    setImage = (v) => {
        this.setState({userImage: v});
    };

    changeUserName() {
        Alert.prompt(
            "Enter your new UserName",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: username => {
                        this.setState({userName: username})
                    }

                }
            ],
            "plain-text"
        );
        console.log("UserName changed")
    }

    changeUserAge() {
        Alert.prompt(
            "Enter your Age",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: userAge => {
                        if (!isNaN(userAge)) {
                            this.setState({userAge: userAge})
                            // Toast.show({
                            //     text: "Your Age is Changed",
                            //     duration: 1000
                            // })
                        } else {
                            Alert.alert("Please enter a valid number")
                        }
                    }
                }
            ],
            "plain-text"
        );
        console.log("age changed")
    }

    changePassword = () => {
        Alert.prompt(
            "Enter your new password",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: password => this.setState({userPassword: password}
                    )
                }
            ],
            "secure-text"
        );
        console.log("Passward changed")
    }

}


export default SettingPage;
