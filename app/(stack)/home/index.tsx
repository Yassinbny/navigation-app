import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex mt-5 gap-2">
        <CustomButton onPress={() => router.push("/products")} color="primary">
          Productos
        </CustomButton>
        <CustomButton onPress={() => router.push("/profile")} color="secondary">
          Perfil
        </CustomButton>
        <CustomButton onPress={() => router.push("/settings")} color="tertiary">
          Ajustes
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
