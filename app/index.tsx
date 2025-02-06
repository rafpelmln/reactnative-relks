import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios"; // Import axios

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      if (response.data.success) {
        alert("Login successful!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masuk</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Button title="Masuk" onPress={handleLogin} />
      <Button title="Daftar" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 13,
  },
});

export default LoginScreen;
