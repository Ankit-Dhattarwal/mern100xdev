import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 103,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 24,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});
