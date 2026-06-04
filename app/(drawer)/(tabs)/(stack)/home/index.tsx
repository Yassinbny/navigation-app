import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <SafeAreaView>
      <View className="flex mt-5 gap-2 px-3">
        <CustomButton onPress={() => router.push("/products")} color="primary">
          Productos
        </CustomButton>
        <CustomButton onPress={() => router.push("/profile")} color="secondary">
          Perfil
        </CustomButton>
        <CustomButton onPress={() => router.push("/settings")} color="tertiary">
          Ajustes
        </CustomButton>
        <CustomButton onPress={onToggleDrawer} color="tertiary">
          Abrir menu
        </CustomButton>
      </View>
      <Link href="/products" asChild>
        <CustomButton color="secondary" variant="text-only">
          Products
        </CustomButton>
      </Link>
    </SafeAreaView>
  );
};

export default HomeScreen;
