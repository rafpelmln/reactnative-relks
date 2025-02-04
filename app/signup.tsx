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

const SignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk kontrol visibilitas password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk kontrol visibilitas konfirmasi password
  const router = useRouter();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Sign Up successful!");
    // router.replace("/")
  };

  const handleLogin = () => {
    router.replace("/"); // Kembali ke halaman login
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
            name={showConfirmPassword ? "eye" : "eye-off"} // Toggle antara ikon mata terbuka dan tertutup
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
    position: "relative", // Agar ikon bisa berada di dalam input
  },
  iconContainer: {
    position: "absolute", // Mengatur posisi ikon agar berada di dalam TextInput
    right: 10, // Menempatkan ikon di kanan
    top: 13, // Menempatkan ikon sedikit lebih rendah agar tidak menempel di atas
  },
});

export default SignupScreen;
