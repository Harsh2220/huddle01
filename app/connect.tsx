import Container from "@/components/UI/Container";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Button, SizableText, YStack } from "tamagui";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";

export default function Connect() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { width, height } = useWindowDimensions();
  const { open, close } = useWeb3Modal();

  return (
    <Container>
      <LinearGradient
        colors={["transparent", "black"]}
        style={{
          position: "absolute",
          top: 0,
          height: height,
          width: width,
          zIndex: 1,
        }}
      />
      <Image
        source={require("../assets/images/login.png")}
        style={{
          height: height / 2,
          width: width,
        }}
        contentFit="cover"
      />
      <YStack
        flex={1}
        padding={"$4"}
        zIndex={2}
        justifyContent="flex-end"
        gap={"$10"}
      >
        <YStack alignItems="center">
          <SizableText color={"white"} size="$12" fontFamily={"$mono"}>
            Create Rooms
          </SizableText>
          <SizableText color={"white"} size="$12" fontFamily={"$mono"}>
            For free
          </SizableText>
        </YStack>
        <Button
          onPress={() => {
            try {
              open();
            } catch (error) {
              console.log(error);
            }
          }}
          borderRadius={"$12"}
          justifyContent="center"
          alignItems="center"
          size={"$6"}
        >
          Connect wallet
        </Button>
      </YStack>
    </Container>
  );
}
