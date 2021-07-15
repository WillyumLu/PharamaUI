import React from "react";
import { Text, View, Button,StyleSheet, TextInput, Linking } from "react-native";
import AuthContext from "./contexts/AuthContext";
class SignupPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username:"",
        password:"",
        reenterPassword:"",
        userInputError: false,         // both username pwd required
        errorMessage: "",
      };
    }
    static contextType = AuthContext;
    _inputCheck = () => {
      const { username, password,reenterPassword } = this.state;

      this.setState({ userInputError: true });
      if (username === "" || password === ""  || reenterPassword === "" ) {
        this.setState({  errorMessage: "Please enter all the required field" });
      } else if(password !== reenterPassword){
        this.setState({  errorMessage: "Passwords entered do not match" });
      } else {
        this.setState({ userInputError: false });
      }  
    };

    _handleSignup = async () => {
      await this._inputCheck();
      if ( !this.state.userInputError) {
        const { username, password } = this.state;
        console.log("User [", username,"] has signed up")

        // TODO: create new user in database
        if(true){

          this.setState({
            userInputError: false,
            errorMessage: "",
            username:"",
            password:"",
            reenterPassword:""
          });
          // this.props.navigation.navigate("Landing");
          this.context.signIn({});

        } else{
          // TODO: catch other errors and return appropriate error message.
          this.setState({  errorMessage: "User doesn't exist or password incorrect. " });
        }

      };
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
            <TextInput style={styles.textInput}
              secureTextEntry
              placeholder="Re-enter password"
              value={this.state.reenterPassword}
              onChangeText={text => this.setState({reenterPassword:text})}
            />
        
            <Button 
              color="grey" 
              title="By signing-up, I agree to the terms and conditions [learn more]" 
              onPress={() => Linking.openURL('http://google.com')} />
              <Button title="Sign up!" onPress={() => this._handleSignup()} />
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

export default SignupPage;