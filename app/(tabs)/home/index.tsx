import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";
import FloatingButton from "../../components/UI/FloatingButton";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
export default HomePage;
