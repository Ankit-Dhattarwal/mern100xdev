import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  notificationState,
  totalNotificationSelector,
} from "./components/atoms/atoms";

function App() {
  return (
    <RecoilRoot>
      <LinkedInBar></LinkedInBar>
    </RecoilRoot>
  );
}

function LinkedInBar() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationState);
  const totalNotifcationCount = useRecoilValue(totalNotificationSelector); /// Selector
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
