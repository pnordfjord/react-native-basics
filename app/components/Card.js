import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import { AppText } from "./AppText";

export function Card({ title, subTitle, image }) {
  console.log(AppText);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View styles={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15, //rounded edges
    backgroundColor: colors.white,
    marginBottom: 20, //for space between them
    overflow: "hidden", //keeps picture from overflowing from card
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
