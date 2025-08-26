"use client"
import * as React from "react";
import { View, Text } from "react-native";
import "nativewind";

const colours = {
  blue: "text-blue-500",
  red: "text-red-500",
} as const;

type Colour = keyof typeof colours;

export function Something({ colour = "blue" }: { colour?: Colour }) {
  return (
    <View>
      <Text className={colours[colour]}>text {colour}!!!</Text>
    </View>
  );
}