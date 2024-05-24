import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  notifcation,
  totalNotificationSelector,
} from "./components/atoms/atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <LinkedInBar></LinkedInBar>
    </RecoilRoot>
  );
}

function LinkedInBar() {
  const [networkCount, setNetworkCount] = useRecoilState(notifcation);
  const totalNotifcationCount = useRecoilValue(totalNotificationSelector); /// Selector

  useEffect(() => {
    /// fetch
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
      console.log(res.data);
    });
  }, []);

  console.log("Rendering LinkedInBar with networkCount:", networkCount);

  return (
    <>
      <button>Home</button>
      <button>
        My Network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messages ({networkCount.messaging})</button>
      <button>Notification ({networkCount.notification})</button>
      <button>Profile ({totalNotifcationCount})</button>
    </>
  );
}
export default App;
