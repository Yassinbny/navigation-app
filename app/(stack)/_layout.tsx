import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ headerTitle: "Home Screen" }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          headerTitle: "Products Screen",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ headerTitle: "Profile Screen" }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ headerTitle: "Settings Screen" }}
      />
    </Stack>
  );
};

export default StackLayout;
