import Container from "@/components/UI/Container";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { Button, SizableText, YStack } from "tamagui";
import { useAccount } from "wagmi";

export default function Connect() {
  const { isConnected } = useAccount();
  const { width, height } = useWindowDimensions();
  const { open } = useWeb3Modal();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.replace("/room");
    }
  }, [isConnected]);

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
