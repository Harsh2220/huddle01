import useRoomStore from "@/store";
import React, { useEffect } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { Avatar, View } from "tamagui";
import { VideoView, useVideoPlayer } from "expo-video";

const videoSource =
  "https://videos.pexels.com/video-files/5198956/5198956-hd_720_1366_25fps.mp4";

function MeetCard() {
  const { users } = useRoomStore();
  const { width, height } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const { isCameraOn } = useRoomStore();
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    if (!isCameraOn) {
      player.pause();
    } else {
      player.play();
    }
  }, [isCameraOn]);

  return (
    <View
      bg={colorScheme === "dark" ? "$black5" : "$white1"}
      borderRadius={"$8"}
      width={users > 2 ? "49%" : "100%"}
      height={
        users === 2 ? height / 2.6 : users === 1 ? height / 1.3 : width / 2
      }
      justifyContent="center"
      alignItems="center"
    >
      {isCameraOn ? (
        <VideoView
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
          contentFit="cover"
        />
      ) : (
        <Avatar circular size={`${users > 2 ? "$8" : "$12"}`}>
          <Avatar.Image
            accessibilityLabel="Cam"
            src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            borderRadius={"$4"}
          />
          <Avatar.Fallback backgroundColor="$accentBackground" />
        </Avatar>
      )}
    </View>
  );
}

export default React.memo(MeetCard);
