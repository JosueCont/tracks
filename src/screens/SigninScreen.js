import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SigninScreen = ({navigation}) =>{
  return (
    <View>
      <Text>Signin Screen</Text>
      <Button title="Go to sign up" onPress={()=>navigation.navigate('SignUp')}/>
      <Button title="Go to Tracks" onPress={()=>navigation.navigate('TrackList')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;