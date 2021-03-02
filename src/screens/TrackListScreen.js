import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>Track List Screen</Text>
      <Button title="Go to track detail" onPress={()=>navigation.navigate('TrackDetail')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50
  }
});

export default TrackListScreen;