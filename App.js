import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  tabNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="TrackList" component={TrackListScreen} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="TrackList" component={this.tabNavigation} />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
