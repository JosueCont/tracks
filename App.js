import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveScreen from './src/screens/ResolveScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/NavigatorRef";
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer
          ref={navigator => {
            setNavigator(navigator);
          }}
        >
          <Stack.Navigator> 
            <Stack.Screen
              name="SignUp"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SigninScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackList"
              component={this.tabNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>        
      </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
