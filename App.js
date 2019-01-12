import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PlaceList from "./src/components/PlaceList/PlaceList";
import AddPlace from "./src/components/AddPlace/AddPlace";

export default class App extends Component {
  state = {
    places: []
  };

  handleAddBtn = place => {
    this.setState({
      ...this.state,
      places: [...this.state.places, place]
    });
  };

  handleDeletePlace = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, arrIndex) => {
          return arrIndex !== index;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddPlace handleAddBtn={this.handleAddBtn} />
        <PlaceList
          places={this.state.places}
          onDeletePlace={this.handleDeletePlace}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
