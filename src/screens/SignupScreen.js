import React, { useContext,useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as authContext } from "../context/AuthContext";
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
  const { state, signup, clearErrorMessage, tryLocalSign } = useContext(authContext);

  useEffect(()=>{
    tryLocalSign();
    const clear = navigation.addListener('blur', clearErrorMessage);
    return clear;
  },[]);

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Signup for tracker!"
        errorMessagge={state.errorMessage}
        ButtonText="Sign Up"
        onSubmit={signup}
      />
     <NavLink 
      text="Already have an account? Sign in instead"
      routeName="SignIn"
     />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 200,
    backgroundColor: "white"
  },
});

export default SignupScreen;
