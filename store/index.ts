import { create } from "zustand";

interface IRoom {
    users: number;
    setUsers: (users: number) => void
}

const useRoomStore = create<IRoom>((set) => ({
    users: 1,
    setUsers: (users) =>
        set({
            users: users,
        }),
}));

export default useRoomStore;