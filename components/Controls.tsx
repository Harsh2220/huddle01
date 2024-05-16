import React from "react";
import { Button, Stack } from "tamagui";
import {
  UserPlus2,
  UserMinus2,
  Camera,
  CameraOff,
  SwitchCamera,
  Users,
  MoreVertical,
  Mic,
  MicOff,
} from "@tamagui/lucide-icons";
import useRoomStore from "@/store";
import { useCameraPermissions } from "expo-camera";

export default function Controls() {
  const { isCameraOn, isMicOn } = useRoomStore();
  const [permission, requestPermission] = useCameraPermissions();

  const CONTROLS = [
    // {
    //   name: "Add user",
    //   icon: UserPlus2,
    //   onPress: () => {},
    // },
    // {
    //   name: "Remove user",
    //   icon: UserMinus2,
    //   onPress: () => {},
    // },
    {
      name: "Microphone",
      icon: isMicOn ? Mic : MicOff,
      onPress: () => {},
    },
    {
      name: "Camera",
      icon: isCameraOn ? Camera : CameraOff,
      onPress: async () => {
        const data = await requestPermission();
        console.log(data);
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
      onPress: () => {},
    },
    // {
    //   name: "All users",
    //   icon: Users,
    //   onPress: () => {},
    // },
  ];

  return (
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
  );
}
