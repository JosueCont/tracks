import React,{useState,useEffect} from 'react';
import {  StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm =({headerText,errorMessagge,onSubmit, ButtonText})=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <>
       <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessagge ? <Text style={styles.errorMessage}>{errorMessagge}</Text> : null}
      <Spacer>
        <Button title={ButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
}

const styles=StyleSheet.create({
  errorMessage:{
    color:'red',
    fontSize:15,
    alignSelf:'center'
  },
});

export default AuthForm;