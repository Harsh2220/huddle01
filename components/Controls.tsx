import useRoomStore from "@/store";
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  MoreVertical,
  SwitchCamera,
} from "@tamagui/lucide-icons";
import React, { useEffect, useRef } from "react";
import { Button, Stack } from "tamagui";
import Sheet from "./UI/Sheet";
import MoreControls from "./Sheets/MoreControls";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useAccount } from "wagmi";
import { useRouter } from "expo-router";

export default function Controls() {
  const { isCameraOn, isMicOn, setIsCameraOn, setIsMicOn } = useRoomStore();
  const moreControlsRef = useRef<BottomSheetModal>(null);
  const { isConnected } = useAccount();
  const router = useRouter();

  const CONTROLS = [
    {
      name: "Microphone",
      icon: isMicOn ? Mic : MicOff,
      onPress: () => {
        setIsMicOn(!isMicOn);
      },
    },
    {
      name: "Camera",
      icon: isCameraOn ? Camera : CameraOff,
      onPress: async () => {
        setIsCameraOn(!isCameraOn);
      },
    },
    {
      name: "Switch camera",
      icon: SwitchCamera,
      onPress: () => {},
    },
    {
      name: "More",
      icon: MoreVertical,
      onPress: () => {
        moreControlsRef.current?.present();
      },
    },
  ];

  useEffect(() => {
    if (!isConnected) {
      router.push("/connect");
    }
  }, [isConnected]);

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="center"
        width={"100%"}
        gap="$2"
        padding="$2"
      >
        {CONTROLS.map((control, index) => (
          <Button
            borderRadius={"$12"}
            icon={control.icon}
            scaleIcon={1.5}
            size={"$5"}
            key={index}
            onPress={control.onPress}
            bg={"$blue5"}
          />
        ))}
      </Stack>
      <Sheet
        style={{
          margin: 16,
        }}
        snapPoints={[280]}
        ref={moreControlsRef}
        detached={true}
        bottomInset={50}
      >
        <MoreControls />
      </Sheet>
    </>
  );
}
