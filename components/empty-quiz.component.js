import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bgWhite, lilac, lightBlue } from "../helpers/colors";
import { MyButton } from "./MyButton";

export default function EmptyQuiz({ goBack }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>There are no cards</Text>

      <MyButton
        onPress={goBack}
        style={[styles.backBtn, { backgroundColor: lightBlue }]}
        color={lilac}>
        Back
      </MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: bgWhite,
    justifyContent: "center",
  },
  Text: {
    fontSize: 30,
    textAlign: "center",
  },
  backBtn: {
    width: 250,
    padding: 20,
    marginTop: 30,
    borderRadius: 15,
  },
});
