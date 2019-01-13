import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.places}
    renderItem={info => (
      <ListItem
        place={info.item.name}
        placeImage={info.item.image}
        onTouchPlace={() => props.onSelectPlace(info.item.key)}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
