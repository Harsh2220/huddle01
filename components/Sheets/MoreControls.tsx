import useRoomStore from "@/store";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import {
  LogOut,
  MessageSquare,
  Settings,
  UserMinus,
  UserPlus,
  Users,
} from "@tamagui/lucide-icons";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import React, { useEffect, useRef } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { Stack, Text } from "tamagui";
import Sheet from "../UI/Sheet";
import AllUsers from "./AllUsers";
import { useAccount } from "wagmi";
import { useRouter } from "expo-router";

export default function MoreControls() {
  const colorScheme = useColorScheme();
  const { isConnected } = useAccount();
  const { dismiss } = useBottomSheetModal();
  const { open } = useWeb3Modal();
  const router = useRouter();
  const { setUsers, users } = useRoomStore();
  const allUsersRef = useRef<BottomSheetModal>(null);

  const CONTROLS = [
    {
      name: "Add user",
      icon: (
        <UserPlus
          color={colorScheme === "dark" ? "white" : "black"}
          size={"$2"}
        />
      ),
      onPress: () => {
        setUsers(users + 1);
        dismiss();
      },
    },
    {
      name: "Remove user",
      icon: (
        <UserMinus
          color={colorScheme === "dark" ? "white" : "black"}
          size={"$2"}
        />
      ),
      onPress: () => {
        setUsers(users - 1);
        dismiss();
      },
    },
    {
      name: "All users",
      icon: (
        <Users color={colorScheme === "dark" ? "white" : "black"} size={"$2"} />
      ),
      onPress: () => {
        dismiss();
        allUsersRef.current?.present();
      },
    },
    {
      name: "Settings",
      icon: (
        <Settings
          color={colorScheme === "dark" ? "white" : "black"}
          size={"$2"}
        />
      ),
      onPress: () => {},
    },
    {
      name: "Message",
      icon: (
        <MessageSquare
          color={colorScheme === "dark" ? "white" : "black"}
          size={"$2"}
        />
      ),
      onPress: () => {},
    },
    {
      name: "LogOut",
      icon: (
        <LogOut
          color={colorScheme === "dark" ? "white" : "black"}
          size={"$2"}
        />
      ),
      onPress: () => {
        dismiss();
        open({
          view: "Account",
        });
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
      <Stack flexDirection="row" justifyContent="space-around" flexWrap="wrap">
        {CONTROLS.map((control, index) => (
          <TouchableOpacity
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              width: "33%",
              padding: 16,
              marginVertical: 16,
            }}
            onPress={control.onPress}
          >
            {control.icon}
            <Text color={"$background"}>{control.name}</Text>
          </TouchableOpacity>
        ))}
      </Stack>
      <Sheet snapPoints={["90%"]} ref={allUsersRef}>
        <AllUsers />
      </Sheet>
    </>
  );
}
