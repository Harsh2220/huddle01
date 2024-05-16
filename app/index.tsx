import Container from "@/components/UI/Container";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Spinner, Stack } from "tamagui";
import { useAccount } from "wagmi";

export default function Loader() {
  const { isConnected, isConnecting } = useAccount();
  const router = useRouter();

  function handleUser() {
    if (isConnecting) return;
    if (isConnected) {
      router.replace("/room");
    } else {
      router.replace("/connect");
    }
  }

  useEffect(handleUser, [isConnecting]);

  return (
    <Container>
      <Stack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="small" />
      </Stack>
    </Container>
  );
}
