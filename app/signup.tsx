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

const SignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [telpon, setTelpon] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        nama: fullName,
        username,
        alamat: address,
        telpon,
        password,
      });

      if (response.data.success) {
        alert("Signup successful!");
        router.replace("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleLogin = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Silahkan isi data pribadi anda</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon"
        value={telpon}
        onChangeText={setTelpon}
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showConfirmPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Button title="Daftar" onPress={handleSignup} />
      <Button title="Masuk" onPress={handleLogin} />
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

export default SignupScreen;