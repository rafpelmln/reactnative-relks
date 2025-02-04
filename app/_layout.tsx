import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Halaman utama untuk login */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Halaman sign-up */}
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
