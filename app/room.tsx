import Container from "@/components/UI/Container";
import { W3mButton } from "@web3modal/wagmi-react-native";
import React from "react";
import { Button, Stack } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import Controls from "@/components/Controls";

export default function Room() {
  return (
    <Container>
      <Stack flex={1} padding={16} alignItems="center">
        <Controls />
      </Stack>
    </Container>
  );
}
