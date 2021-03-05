import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';


const AccountScreen = () =>{
  const {signout}=useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>Account screen</Text>
      <Button title="Sign Out" style={styles.button} onPress={signout}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  title:{
    fontSize:18,
    alignSelf:'center',
    marginTop:20
  },
  button:{
    marginHorizontal:10,
    marginTop:20,
  }
});

export default AccountScreen;