import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.darkseagreen]}
    >
      <View style={styles.container}>
        <Image source={require("./../assets/img1.png")} style={styles.image} />
        <View style={styles.bottonText}>
          <Text style={styles.content}>Welcome To</Text>
          <Text style={styles.content}>Care Monitor</Text>

          <View style={styles.bottonText}>
            <Button
              title="Join Now"
              onPress={() => navigation.navigate("Signup")}
              style={{ marginTop: 50 }}
            />
          </View>

          <View style={styles.LoginContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ ...styles.text, fontWeight: "bold", marginLeft: 5 }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },
  bottonText: {
    paddingHorizontal: 22,
  },
  content: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center", // Añade esta propiedad para centrar horizontalmente
    maxWidth: 300, // Establece una anchura máxima para centrar horizontalmente
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: "center", // Añade esta propiedad para centrar horizontalmente
    maxWidth: 300, // Establece una anchura máxima para centrar horizontalmente
  },
  LoginContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
};

export default Welcome;
