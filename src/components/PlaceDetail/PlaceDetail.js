import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const PlaceDetail = props => (
  <Modal
    visible={props.selectedPlace !== null}
    onRequestClose={props.onModalClose}
    animationType="slide"
  >
    <View style={styles.modalContainer}>
      <Image source={props.selectedPlace.image} style={styles.placeImage} />
      <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      <View>
        <TouchableOpacity onPress={props.onDeletePlace}>
          <Icon size={40} name="delete" color="red" />
        </TouchableOpacity>
        <Button title="Close" onPress={props.onModalClose} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default PlaceDetail;
