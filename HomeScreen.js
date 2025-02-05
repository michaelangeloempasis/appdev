import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ImageBackground, Animated } from "react-native";

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <ImageBackground 
      source={{ uri: "https://wallpaperaccess.com/full/5652030.jpg" }} 
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Animated.Text style={[styles.title, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>WELCOME TO MY PORTFOLIO</Animated.Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffcc00",
    textAlign: "center",
  },
});
