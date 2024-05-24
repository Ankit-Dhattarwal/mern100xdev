import { atom, selector } from "recoil";
import axios from "axios";

export const notificationState = atom({
  key: "notificationState",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotification = get(notificationState);
    return (
      allNotification.network +
      allNotification.jobs +
      allNotification.notification +
      allNotification.messaging
    );
  },
});
