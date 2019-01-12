import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onTouchPlace}>
    <View style={styles.listItem}>
      <Text>{props.place}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: "#eee",
    padding: 10,
    margin: 5
  }
});

export default ListItem;
