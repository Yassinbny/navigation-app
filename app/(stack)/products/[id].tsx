import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);
  if (!product) {
    return <Redirect href="/" />;
  }
  return (
    <View className="px-5 mt-10">
      <Text className={`font-work-black text-2xl`}>{product.title}</Text>
      <Text className="text-gray-600">{product.description}</Text>
      <Text className="font-work-black text-3xl mt-4">
        ${product.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default ProductDetailScreen;
