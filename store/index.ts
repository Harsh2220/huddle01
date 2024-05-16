import { create } from "zustand";

interface IRoom {
    users: number;
    isCameraOn: boolean;
    isMicOn: boolean;
    setUsers: (users: number) => void
    setIsCameraOn: (isCameraOn: boolean) => void
    setIsMicOn: (isMicOn: boolean) => void
}

const useRoomStore = create<IRoom>((set) => ({
    users: 1,
    isCameraOn: false,
    isMicOn: false,
    setUsers: (users) =>
        set({
            users: users,
        }),
    setIsCameraOn: (isCameraOn) =>
        set({
            isCameraOn: isCameraOn,
        }),
    setIsMicOn: (isMicOn) =>
        set({
            isMicOn: isMicOn,
        }),
}));

export default useRoomStore;