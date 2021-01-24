//rsf then imrn
import React from "react";

import { Text, StyleSheet, fontFamily, Platform } from "react-native";

export function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

//<Heading> My Heading </Heading>
//rnss
const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      //android: {
      // fontSize: 18,
      //  fontFamily: "Roboto",
      //},
    }),
  },
});
