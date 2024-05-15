import Container from "@/components/UI/Container";
import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { Button } from "tamagui";
import { useRouter } from "expo-router";

export default function index() {
  const { open } = useWeb3Modal();
  const router = useRouter();

  return (
    <Container>
      <Button
        theme={"blue"}
        onPress={() => {
          // open();
          router.push("/connect");
        }}
      >
        Index
      </Button>
    </Container>
  );
}
