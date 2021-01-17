import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Chat from "./src/component/Chat";
import Login from "./src/component/Login";

const AppNavigator=createStackNavigator(
  {
    Login:Login,
    Chat:Chat,
  },
  {
    headerMode:"none"
  }
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);