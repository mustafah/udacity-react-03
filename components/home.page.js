import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import CreateDeckScreen from "../components/create-deck.page";
import DecksList from "../components/decks-list.component";
import { lilac, white } from "../helpers/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const HomePage = () => (
  <Tabs.Navigator
    initialRouteName="Decks List"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let icon;
        if (route.name === "Decks List") {
          icon = (
            <Ionicons
              name="ios-bookmarks"
              size={24}
              color={color}
            />
          );
        } else if (route.name === "Create Deck") {
          icon = (
            <Ionicons
              name="add-circle-outline"
              size={24}
              color={color}
            />
          );
        }
        return icon;
      },
    })}
    tabBarOptions={{
      header: null,
      activeTintColor: lilac,
      showIcon: true,
      style: {
        height: 90,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    }}
  >
    <Tabs.Screen name="Decks List" component={DecksList} />
    <Tabs.Screen name="Create Deck" component={CreateDeckScreen} />
  </Tabs.Navigator>
);

export default HomePage;
