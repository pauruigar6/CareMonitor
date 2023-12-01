import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import COLORS from "../constants/colors";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSignUp = () => {
    const newErrors = {};
    let hasErrors = false;

    if (!firstName) {
      newErrors.firstName = "First Name is required";
      hasErrors = true;
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required";
      hasErrors = true;
    }

    if (!email) {
      newErrors.email = "Email Address is required";
      hasErrors = true;
    }

    if (!password) {
      newErrors.password = "Password is required";
      hasErrors = true;
    }

    if (!passwordConfirm) {
      newErrors.passwordConfirm = "Please confirm your password";
      hasErrors = true;
    } else if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "Passwords do not match";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Realiza el proceso de registro aquí
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1, marginHorizontal: 22 }}
          behavior="padding"
        >
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.black,
              }}
            >
              Create Account
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              placeholder="First Name"
              placeholderTextColor={COLORS.grey}
              keyboardType="default"
              style={styles.input}
              value={firstName}
              onChangeText={(text) => {
                setFirstName(text);
                setErrors({ ...errors, firstName: "" });
              }}
            />
            <Text style={styles.errorText}>{errors.firstName}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor={COLORS.grey}
              keyboardType="default"
              style={styles.input}
              value={lastName}
              onChangeText={(text) => {
                setLastName(text);
                setErrors({ ...errors, lastName: "" });
              }}
            />
            <Text style={styles.errorText}>{errors.lastName}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={COLORS.grey}
              keyboardType="email-address"
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors({ ...errors, email: "" });
              }}
            />
            <Text style={styles.errorText}>{errors.email}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="**********"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!isPasswordShown}
                style={styles.passwordInput}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrors({ ...errors, password: "" });
                }}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={styles.passwordToggle}
              >
                <Ionicons
                  name={isPasswordShown ? "eye-off" : "eye"}
                  size={24}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.errorText}>{errors.password}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="**********"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!isPasswordShown}
                style={styles.passwordInput}
                value={passwordConfirm}
                onChangeText={(text) => {
                  setPasswordConfirm(text);
                  setErrors({ ...errors, passwordConfirm: "" });
                }}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={styles.passwordToggle}
              >
                <Ionicons
                  name={isPasswordShown ? "eye-off" : "eye"}
                  size={24}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.errorText}>{errors.passwordConfirm}</Text>
          </View>

          <Button
            title="Sign Up"
            filled
            style={styles.signupButton}
            onPress={handleSignUp}
          />

          <View style={styles.loginLink}>
            <Text style={{ fontSize: 16, color: COLORS.black }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  passwordInputContainer: {
    flex: 1,
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 22,
  },
  passwordInput: {
    flex: 1,
  },
  passwordToggle: {
    position: "absolute",
    right: 12,
  },
  signupButton: {
    marginTop: 18,
    marginBottom: 4,
  },
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginLeft: 4,
  },
};

export default Signup;
