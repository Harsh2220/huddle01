import React from "react";
import { SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Container({ children }: { children: React.ReactNode }) {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: top,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export default React.memo(Container);
