import { atom, selector } from "recoil";

export const notifcation = atom({
  key: "networkAtom",
  default: {
    network: 0,
    jobs: 0,
    notification: 0,
    messaging: 0,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotification = get(notifcation);
    return (
      allNotification.network +
      allNotification.jobs +
      allNotification.notification +
      allNotification.messaging
    );
  },
});
