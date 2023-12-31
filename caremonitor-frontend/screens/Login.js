import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import COLORS from "../constants/colors";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (email !== "" && password !== "") {
      // Realiza la lógica de inicio de sesión
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        keyboardShouldPersistTaps="handled"
      >
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Hi Welcome Back ! 👋</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email address</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Enter your email address"
                  placeholderTextColor={COLORS.black}
                  keyboardType="email-address"
                  style={styles.input}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              {emailError && (
                <Text style={styles.errorText}>
                  Please fill in your email address
                </Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={!isPasswordShown}
                  style={styles.input}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={styles.showPasswordButton}
                >
                  <Ionicons
                    name={isPasswordShown ? "eye-off" : "eye"}
                    size={24}
                    color={COLORS.black}
                  />
                </TouchableOpacity>
              </View>
              {passwordError && (
                <Text style={styles.errorText}>
                  Please fill in your password
                </Text>
              )}
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.primary : undefined}
              />
              <Text>Remember Me</Text>
            </View>

            <Button
              title="Login"
              filled
              style={styles.loginButton}
              onPress={handleLogin}
            />

            <View style={styles.signupTextContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signupLink}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  header: {
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  inputBox: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  input: {
    width: "100%",
  },
  showPasswordButton: {
    position: "absolute",
    right: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 6,
  },
  checkbox: {
    marginRight: 8,
  },
  loginButton: {
    marginTop: 18,
    marginBottom: 4,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
  signupTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  signupText: {
    fontSize: 16,
    color: COLORS.black,
  },
  signupLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
};

export default Login;
