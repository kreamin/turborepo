import * as React from "react";
import {
  View,
  Text
} from "react-native";

import "nativewind"

export function Something() {
  return (
    <View>
      <Text className={'text-blue-500'}>text should be blue!!!!</Text>
    </View>
  )
}