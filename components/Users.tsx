import useRoomStore from "@/store";
import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { Avatar, Stack, View } from "tamagui";

export default function Users() {
  const { height, width } = useWindowDimensions();
  const { users } = useRoomStore();

  if (users == 2) {
    return (
      <Stack gap="$2">
        <View
          bg={"$black5"}
          borderRadius={"$8"}
          width={"100%"}
          height={height / 2.6}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src={`https://source.unsplash.com/random/200x200?sig=1`}
              borderRadius={"$4"}
            />
            <Avatar.Fallback backgroundColor="$accentBackground" />
          </Avatar>
        </View>
        <View
          bg={"$black5"}
          borderRadius={"$8"}
          width={"100%"}
          height={height / 2.6}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src={`https://source.unsplash.com/random/200x200?sig=1`}
              borderRadius={"$4"}
            />
            <Avatar.Fallback backgroundColor="$black075" />
          </Avatar>
        </View>
      </Stack>
    );
  }

  if (users === 1) {
    return (
      <View
        bg={"$black5"}
        borderRadius={"$8"}
        width={"100%"}
        height={height / 1.3}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar circular size="$12">
          <Avatar.Image
            accessibilityLabel="Cam"
            src={`https://source.unsplash.com/random/200x200?sig=1`}
            borderRadius={"$4"}
          />
          <Avatar.Fallback backgroundColor="$accentBackground" />
        </Avatar>
      </View>
    );
  }

  return (
    <FlatList
      data={[...Array(users)]}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={{
        gap: 8,
      }}
      renderItem={() => (
        <View
          bg={"$black5"}
          borderRadius={"$8"}
          width={"48%"}
          height={width / 2}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar circular size="$6">
            <Avatar.Image
              accessibilityLabel="Cam"
              src={`https://source.unsplash.com/random/200x200?sig=1`}
              borderRadius={"$4"}
            />
            <Avatar.Fallback backgroundColor="$accentBackground" />
          </Avatar>
        </View>
      )}
    />
  );
}
