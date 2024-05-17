import { User } from "@/types";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { Text } from "tamagui";
import UserCard from "../UserCard";

export default function AllUsers() {
  const [users, setUsers] = useState<[] | User[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  const renderItem = React.useCallback(
    ({ item }: { item: User }) => <UserCard user={item} />,
    []
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    try {
      getUsers();
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const _RefreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      progressBackgroundColor={"black"}
    />
  );

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <BottomSheetFlatList
      ListHeaderComponent={ListHeaderComponent}
      data={users}
      renderItem={renderItem}
      refreshControl={_RefreshControl}
      refreshing={refreshing}
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    />
  );
}

function _ListHeaderComponent() {
  return (
    <Text color={"$background"} textAlign="center" fontSize={"$8"}>
      All Users
    </Text>
  );
}

const ListHeaderComponent = React.memo(_ListHeaderComponent);
