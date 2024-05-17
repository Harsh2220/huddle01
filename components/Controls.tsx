import useRoomStore from "@/store";
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  MoreVertical,
  SwitchCamera,
} from "@tamagui/lucide-icons";
import React, { useRef } from "react";
import { Button, Stack } from "tamagui";
import Sheet from "./UI/Sheet";
import MoreControls from "./Sheets/MoreControls";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function Controls() {
  const { isCameraOn, isMicOn } = useRoomStore();
  const moreControlsRef = useRef<BottomSheetModal>(null);

  const CONTROLS = [
    {
      name: "Microphone",
      icon: isMicOn ? Mic : MicOff,
      onPress: () => {},
    },
    {
      name: "Camera",
      icon: isCameraOn ? Camera : CameraOff,
      onPress: async () => {},
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

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="center"
        width={"100%"}
        gap="$2"
        position="absolute"
        bottom="$4"
      >
        {CONTROLS.map((control, index) => (
          <Button
            borderRadius={"$12"}
            icon={control.icon}
            scaleIcon={1.5}
            size={"$5"}
            key={index}
            onPress={control.onPress}
            bg={"$accentBackground"}
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
