import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from '../pages/Home';
import Card from '../pages/Forms/Card';
import User from '../pages/Forms/User';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName='Home'
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FormCard" component={Card} />
      <Stack.Screen name="FormUser" component={User} />
    </Stack.Navigator>
  );
}

export default StackRoutes;
