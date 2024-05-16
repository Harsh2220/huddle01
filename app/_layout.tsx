import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { TamaguiProvider } from "@tamagui/core";
import "@walletconnect/react-native-compat";
import {
  Web3Modal,
  createWeb3Modal,
  defaultWagmiConfig,
} from "@web3modal/wagmi-react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { arbitrum, mainnet, polygon } from "viem/chains";
import { WagmiConfig } from "wagmi";
import { tamaguiConfig } from "../tamagui.config";

const projectId = process.env.EXPO_PUBLIC_WALLET_CONNECT_ID || "";

const metadata = {
  name: "Huddle01",
  description:
    "Building the 1st decentralized real-time communication network. Leverage Huddle01's suite of developer-friendly SDKs to enable live audio & video experiences with just a quick plug-in.",
  url: "https://huddle01.com/",
  icons: [
    "https://framerusercontent.com/images/E2CR4AUZW8VFxVZhLhWunPjTOM.png",
  ],
  redirect: {
    native: "huddle01://",
    universal: "https://huddle01.com/",
  },
};

const chains = [mainnet, polygon];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <BottomSheetModalProvider>
          <TamaguiProvider config={tamaguiConfig}>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <RootStack />
            </ThemeProvider>
          </TamaguiProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      <Web3Modal />
    </WagmiConfig>
  );
}

function RootStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="connect" options={{ headerShown: false }} />
      <Stack.Screen name="room" options={{ headerShown: false }} />
    </Stack>
  );
}
