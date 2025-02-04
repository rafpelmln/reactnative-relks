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
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import axios from "axios"; // API CLIENT

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol visibilitas password
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Masuk Berhasil!");
      // Arahkan ke halaman lain jika diperlukan
    } else {
      alert("Username atau Password Salah!");
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
          secureTextEntry={!showPassword} // Jika showPassword true, password akan terlihat
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer} // Membuat ikon tetap berada di dalam field teks
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"} // Toggle antara ikon mata terbuka dan tertutup
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
    position: "relative", // Agar ikon bisa berada di dalam input
  },
  iconContainer: {
    position: "absolute", // Mengatur posisi ikon agar berada di dalam TextInput
    right: 10, // Menempatkan ikon di kanan
    top: 13, // Menempatkan ikon sedikit lebih rendah agar tidak menempel di atas
  },
});

export default LoginScreen;
