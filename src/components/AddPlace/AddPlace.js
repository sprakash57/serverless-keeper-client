import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

export default class AddPlace extends React.Component {
  state = {
    place: ""
  };

  handlePlaceAdded = value => {
    this.setState({ place: value });
  };

  handleAddBtn = () => {
    if (this.state.place.trim() === "") return;
    this.props.handleAddBtn(this.state.place);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWidth}
          placeholder="Awesome place"
          onChangeText={this.handlePlaceAdded}
          value={this.state.place}
        />
        <Button
          style={styles.buttonWidth}
          title="Add"
          onPress={this.handleAddBtn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ff0",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputWidth: {
    width: "70%"
  },
  buttonWidth: {
    width: "30%"
  }
});
