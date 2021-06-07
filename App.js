import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import store from "./reducers/redux";
import Routes from "./routes";
import AppStatusBar from "./statusbar";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <AppStatusBar backgroundColor={"white"} barStyle="light-content" />
            <Routes />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
