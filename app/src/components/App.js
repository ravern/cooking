import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";

import RootScreen from "~/screens/Root";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootScreen />
    </>
  );
}
