import React from "react";
import { Container, Content, List, ListItem, Separator, Text, View } from "native-base";
import { Linking } from "react-native";

class InfoPage extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <Separator bordered>
                            <Text>About</Text>
                        </Separator>
                        <ListItem onPress={() => this._showExternalWebsite("Terms and Conditions")}>
                            <Text>Terms and Conditions</Text>
                        </ListItem>
                        <ListItem onPress={() => this._showExternalWebsite("Private Policy")}>
                            <Text>Privacy Policy</Text>
                        </ListItem>
                        <Separator bordered>
                            <Text>Support</Text>
                        </Separator>
                        <ListItem onPress={() => this._showExternalWebsite("Contact")}>
                            <Text>Contact Varient</Text>
                        </ListItem>
                    </List>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ alignSelf: "center" }}>Version 0.1.0</Text>
                        <Text style={{ alignSelf: "center" }}>Copyright &copy; 2020</Text>
                    </View>
                </Content>
            </Container>
        );
    }

    _showExternalWebsite(target) {
        let target_url;
        if (target === "Terms and Conditions") {
            target_url = TERMS_AND_CONDITIONS_URL;
        } else if (target === "Private Policy") {
            target_url = PRIVATE_POLICY_URL;
        } else if (target === "Contact") {
            target_url = CONTACT_URL;
        }
        Linking.openURL(target_url).catch((err) => console.error("An error occurred when trying to open " + target + "."));
    }
}

const TERMS_AND_CONDITIONS_URL = "https://policies.google.com/terms";
const PRIVATE_POLICY_URL = "https://policies.google.com/privacy";
const CONTACT_URL = "https://policies.google.com/";

export default InfoPage;
