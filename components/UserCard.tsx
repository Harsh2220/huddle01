import { User } from "@/types";
import React from "react";
import { Avatar, Text, XStack } from "tamagui";

function UserCard({ user }: { user: User }) {
  return (
    <XStack alignItems="center" gap="$3">
      <Avatar circular size="$4">
        <Avatar.Image
          accessibilityLabel="Cam"
          src={`https://source.unsplash.com/random/200x200?sig=${user.id}`}
          borderRadius={"$4"}
        />
        <Avatar.Fallback
          backgroundColor="$accentBackground"
          componentName={user.name}
        />
      </Avatar>
      <Text color={"$background"} fontSize={"$6"}>
        {user.name}
      </Text>
    </XStack>
  );
}

export default React.memo(UserCard);
