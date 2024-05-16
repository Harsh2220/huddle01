import Container from "@/components/UI/Container";
import { W3mButton } from "@web3modal/wagmi-react-native";
import React from "react";
import { Stack } from "tamagui";

export default function Room() {
  return (
    <Container>
      <Stack>
        <W3mButton />
      </Stack>
    </Container>
  );
}
