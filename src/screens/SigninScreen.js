import React,{useContext,useEffect} from 'react';
import {View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = ({navigation}) =>{
  const {state,signin,clearErrorMessage}=useContext(Context);
  useEffect(()=>{
    const clear = navigation.addListener('blur', clearErrorMessage);
    return clear;
  },[]);
  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign in for tracker"
        ButtonText="Sign In"
        errorMessagge={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink 
        text="If you dont have account, sign up"
        routeName="SignUp"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    paddingBottom: 200,
    backgroundColor: "white"
  }
});

export default SigninScreen;