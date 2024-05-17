import useRoomStore from "@/store";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MeetCard from "./MeetCard";

export default function Users() {
  const { users } = useRoomStore();

  return (
    <FlatList
      data={[...Array(users)]}
      numColumns={2}
      columnWrapperStyle={[
        styles.columnWrapperStyle,
        {
          gap: users > 2 ? 0 : 8,
        },
      ]}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={() => <MeetCard />}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  contentContainerStyle: {
    gap: 8,
  },
});
