import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PlaceList from "./src/components/PlaceList/PlaceList";
import AddPlace from "./src/components/AddPlace/AddPlace";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";

class App extends Component {
  handleAddBtn = place => {
    this.props.onAddPlace(place);
  };

  handleSelectPlace = key => {
    this.props.onSelectPlace(key);
  };

  handleDeletePlace = () => {
    this.props.onDeletePlace();
  };

  handleModalClose = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.selectedPlace !== null && (
          <PlaceDetail
            selectedPlace={this.props.selectedPlace}
            onDeletePlace={this.handleDeletePlace}
            onModalClose={this.handleModalClose}
          />
        )}
        <AddPlace handleAddBtn={this.handleAddBtn} />
        <PlaceList
          places={this.props.places}
          onSelectPlace={this.handleSelectPlace}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
