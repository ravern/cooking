import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import PostDishScreen from "./screens/PostDish";

const Stack = createStackNavigator();

export default function RootScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostDish"
          component={PostDishScreen}
          options={{ title: "Post a new dish" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
