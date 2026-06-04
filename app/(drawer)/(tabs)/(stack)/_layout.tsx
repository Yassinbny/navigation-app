import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftPress = () => {
    if (router.canDismiss()) {
      router.dismiss(1);
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "#fff" },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            size={24}
            color="black"
            className="mr-2"
            onPress={() => onHeaderLeftPress()}
          />
        ),
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
