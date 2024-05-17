import useRoomStore from "@/store";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Avatar, View } from "tamagui";

function MeetCard() {
  const { users } = useRoomStore();
  const { width, height } = useWindowDimensions();

  return (
    <View
      bg={"$black5"}
      borderRadius={"$8"}
      width={users > 2 ? "49%" : "100%"}
      height={
        users === 2 ? height / 2.6 : users === 1 ? height / 1.3 : width / 2
      }
      justifyContent="center"
      alignItems="center"
    >
      <Avatar circular size={`${users > 2 ? "$8" : "$12"}`}>
        <Avatar.Image
          accessibilityLabel="Cam"
          src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          borderRadius={"$4"}
        />
        <Avatar.Fallback backgroundColor="$accentBackground" />
      </Avatar>
    </View>
  );
}

export default React.memo(MeetCard);
