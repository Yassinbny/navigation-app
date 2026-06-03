import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "secondary" | "text-only";
}

const CustomButton = ({
  children,
  onPress,
  onLongPress,
  color = "primary",
  variant = "contained",
  className,
}: CustomButtonProps) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`${btnColor} px-4 py-2 rounded-md active:opacity-80 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className={`text-white text-center font-work-medium`}>
        {children}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
