import React from "react";
import { Text, View, Button,StyleSheet, TextInput } from "react-native";
import AuthContext from "./contexts/AuthContext";

class LoginPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username:"",
        password:"",
        userInputError: false,         // both username pwd required
        errorMessage: "",
      };
    }

    static contextType = AuthContext;

    _inputCheck = () => {
      if (this.state.username === "" || this.state.password === ""  ) {
        this.setState({ userInputError: true });
        this.setState({  errorMessage: "Please enter all the required field" });
      } else {
        this.setState({ userInputError: false });
      }
    };

    _handleLogin = async () => {
      await this._inputCheck();
      if ( !this.state.userInputError) {
        const { username, password } = this.state;
        console.log("User [", username,"] has logged in")

        // TODO: check authentication credential
          // Note: this credential method will need to be async
        if(true){

          this.setState({
            userInputError: false,
            errorMessage: "",
            username:"",
            password:""
          });
          this.context.signIn({})
          // this.props.navigation.navigate("Landing");

        } else{
          // TODO: catch other errors and return appropriate error message.
          this.setState({  errorMessage: "User doesn't exist or password incorrect. " });
        }
      }
    }


    render(){
        return (
          <View style={styles.screen}>
            <View style={styles.greetingView}>
              <Text style={styles.greetingText}>Welcome to Varient</Text>
              <Text style={styles.errorMessage}>
                  {this.state.errorMessage}
              </Text>
            </View>
            <TextInput style={styles.textInput}
              placeholder="Username"
              value={this.state.username}
              onChangeText={text => this.setState({username:text})}
            />
            <TextInput style={styles.textInput}
              secureTextEntry
              placeholder="Password"
              value={this.state.password}
              onChangeText={text => this.setState({password:text})}

            />
            <Button title="Sign in!" onPress={() => this._handleLogin()} />
            <Button
              style={{fontSize:13}}
              color="grey"
              title="Not a user? Sign up!"
              onPress={() => this.props.navigation.navigate("Signup")} />


          </View>
        );
    }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',

  },

  greetingText:{
    fontSize:18,
  },

  errorMessage: {
    color: "red",
    fontWeight:"600",
    fontSize:16
  },

  greetingView:{
    marginTop: 100,
    marginBottom:50,
    alignItems:"center",

  },

  textInput :{
    marginVertical:20,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    width: 300,

  },

  title:{
    fontFamily: 'open-sans-bold'
  },

});

export default LoginPage;