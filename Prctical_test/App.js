import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput,Button} from 'react-native';

export default class App extends Component {



  constructor(props)
  {
    super(props);
    this.state={username:""};
    this.state={password:""};
  }

  Submit=()=>
  {
    var name= this.state.username;
    var pass=this.state.password;

    console.log(name);
    console.log(pass);

    axios.post('http://localhost//index.php?email='+this.state.useremail+'&password='+this.state.userpassword)
          .then(res => {
            const message = res.data.message;
            alert(message);

            if(message === 'Login success') {
                cookie.save('userEmail', this.state.useremail, { path: '/' });
                cookie.save('userPassword', this.state.userpassword, { path: '/' });
                window.location = '/home';
            }
          });
  }


  render()
  {
    return (
      <View style={styles.container}>
       <TextInput
              placeholder={"User Name"}
              placeholderTextColor={"blue"}
              style={styles.TextStyle}
              onChangeText={username=>this.setState({username})}
          />
          <TextInput
              placeholder={"Password"}
              placeholderTextColor={"blue"}
              keyboardType={"visible-password"}   
              style={styles.TextStyle}
              onChangeText={password=>this.setState({password})}
              passwordRules= {true}
          />
          <Button
              title={"Login"}
              onPress={this.Function}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    marginTop:10,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  TextStyle:
  {
      borderBottomColor:'red',
      borderBottomWidth:1,
      marginBottom:20
  }
});
