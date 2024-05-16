import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useCallback } from "react";
import { useColorScheme } from "react-native";

const Sheet = React.forwardRef<BottomSheetModalMethods, BottomSheetProps>(
  (props, ref) => {
    const colorScheme = useColorScheme();

    const renderBackdrop = useCallback(
      (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        index={0}
        ref={ref}
        handleIndicatorStyle={{
          width: "10%",
          backgroundColor: colorScheme === "dark" ? "black" : "white",
        }}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          borderRadius: 30,
          backgroundColor: colorScheme === "dark" ? "black" : "white",
        }}
        {...props}
      >
        {props.children}
      </BottomSheetModal>
    );
  }
);

export default Sheet;
