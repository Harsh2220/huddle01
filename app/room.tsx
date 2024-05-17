import Controls from "@/components/Controls";
import Container from "@/components/UI/Container";
import Users from "@/components/Users";
import React from "react";
import { Stack, View } from "tamagui";

export default function Room() {
  return (
    <Container>
      <Stack
        flex={1}
        padding={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <View flex={1} width={"100%"}>
          <Users />
        </View>
        <Controls />
      </Stack>
    </Container>
  );
}
