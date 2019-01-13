import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onTouchPlace}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.placeImage} />
      <Text>{props.place}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: "#eee",
    padding: 10,
    margin: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    margin: 4,
    width: 40,
    height: 40
  }
});

export default ListItem;
