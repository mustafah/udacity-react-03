import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateCardPage from "../components/create-card.page";
import DeckPage from "../components/deck.page";
import HomePage from "../components/home.page";
import QuizView from "../components/quiz.component";
import getHeaderTitle from "./header";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomePage}
      options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
    />
    <Stack.Screen
      name="Deck View"
      component={DeckPage}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
    <Stack.Screen
      name="Add Card"
      component={CreateCardPage}
      options={({ route }) => ({
        title: 'Adding Card to "' + route.params.title + '" Deck',
      })}
    />
    <Stack.Screen
      name="Quiz"
      component={QuizView}
      options={({ route }) => ({
        title: route.params.title + " Quiz",
      })}
    />
  </Stack.Navigator>
);
