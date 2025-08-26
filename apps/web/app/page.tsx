"use client";

import {Something} from "@repo/ui"
import { View, Text } from "react-native";
import "react-native-web"

export default function Web() {
  return (
    <View>
        <Text>Web</Text>
        <Something colour='red' />
    </View>
  );
}
