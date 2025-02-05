import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default function AboutMeScreen() {
  return (
    <ImageBackground 
      source={{ uri: "https://wallpaperaccess.com/full/5652030.jpg" }} 
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>ABOUT ME</Text>
        <Image 
          source={{ uri: "https://i.im.ge/2025/02/05/HsnWH4.profile-jpg.jpeg" }} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Name</Text>
        <Text style={styles.fullName}>Liel Princes M. Calo</Text>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bio}>
        "A creative and forward-thinking developer who enjoys building intuitive mobile applications. I specialize in React Native, ensuring smooth functionality and engaging designs for modern users."
        </Text>
        <Text style={styles.sectionTitle}>Skills & Interests</Text>
        <Text style={styles.skills}>React Native | Expo | JavaScript | UI/UX etc.</Text>
        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.contact}>caloprincesliel@gmail.com</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    color: "#ffcc00",
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    color: "#fff",
  },
  skills: {
    fontSize: 16,
    color: "#ccc",
  },
  contact: {
    fontSize: 16,
    color: "#00bfff",
  },
});