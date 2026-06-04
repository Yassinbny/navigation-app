import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10 flex gap-2">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="text-gray-600">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="font-work-black">${item.price}</Text>
              <Link
                className="text-primary"
                href={{
                  pathname: "/products/[id]",
                  params: { id: item.id },
                }}
              >
                View Details
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
