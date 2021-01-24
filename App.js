import React from "react";
import { Button, Text, View } from "react-native";

import AppText from "./app/components/AppText";
import { AppButton } from "./app/components/AppButton";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { Card } from "./app/components/Card";

export default function App() {
  return (
    <View style={{ backgroundColor: "f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red jacket"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
// return.. <View..
//    style={{
//      backgroundColor: "#f8f4f4",
//      padding: 20,
//      paddingTop: 100,
//    }}
//return <WelcomeScreen />;
//  return (
//    <View
//      style={{
//        flex: 1,
//        justifyContent: "center",
//       alignItems: "center",
//      }}
//    >
//      <AppButton title="Login" onPress={() => console.log("tapped")} />
//    </View>
//  );
