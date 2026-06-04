import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Product Not Found",
    });
  }, [product]);

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
