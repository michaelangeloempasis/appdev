import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: "https://wallpaperaccess.com/full/5652030.jpg" }} 
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>MY PORTFOLIO</Text>
        <Image 
          source={{ uri: "https://i.im.ge/2025/02/05/HsnWH4.profile-jpg.jpeg" }} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Name</Text>
        <Text style={styles.fullName}>Liel Princes M. Calo</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About Me')}>
          <Text style={styles.buttonText}>Go to About Me</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffcc00",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffcc00",
  },
  fullName: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ffcc00",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  }
});
