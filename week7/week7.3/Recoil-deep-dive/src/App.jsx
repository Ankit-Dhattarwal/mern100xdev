// import "./App.css";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import {
//   jobsAtom,
//   messagingAtom,
//   networkAtom,
//   notificationAtom,
// } from "./components/atoms/atoms";

// /// Note: When anytime want to access the atom then need to wrap with the RecoilRoot
// function App() {
//   return (
//     <RecoilRoot>
//       <LinkedInBar></LinkedInBar>
//     </RecoilRoot>
//   );
// }

// function LinkedInBar() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsNotificationCount = useRecoilValue(jobsAtom);
//   const notificationCount = useRecoilValue(notificationAtom);
//   const [MesaageNotificationCount, setMessageNotification] =
//     useRecoilState(messagingAtom);

//   return (
//     <>
//       <button>Home</button>
//       <button>
//         My Network (
//         {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
//       </button>
//       <button>Jobs ({jobsNotificationCount})</button>
//       <button>Messages ({MesaageNotificationCount})</button>
//       <button>Notification ({notificationCount})</button>
//       <button
//         onClick={() => {
//           setMessageNotification(MesaageNotificationCount + 1);
//         }}
//       >
//         Profile
//       </button>
//     </>
//   );
// }
// export default App;

////////////////////////////////------ useSetRecoilState----/////////////////////////////////////////////

// import "./App.css";
// import {
//   RecoilRoot,
//   useRecoilState,
//   useRecoilValue,
//   useSetRecoilState,
// } from "recoil";
// import {
//   jobsAtom,
//   messagingAtom,
//   networkAtom,
//   notificationAtom,
// } from "./components/atoms/atoms";

// /// Note: When anytime want to access the atom then need to wrap with the RecoilRoot
// function App() {
//   return (
//     <RecoilRoot>
//       <LinkedInBar></LinkedInBar>
//     </RecoilRoot>
//   );
// }

// function LinkedInBar() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsNotificationCount = useRecoilValue(jobsAtom);
//   const notificationCount = useRecoilValue(notificationAtom);
//   const MesaageNotificationCount = useRecoilValue(messagingAtom);

//   return (
//     <>
//       <button>Home</button>
//       <button>
//         My Network (
//         {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
//       </button>
//       <button>Jobs ({jobsNotificationCount})</button>
//       <button>Messages ({MesaageNotificationCount})</button>
//       <button>Notification ({notificationCount})</button>
//       <ButtonUpdate />
//     </>
//   );
// }

// function ButtonUpdate() {
//   const setMessageNotification = useSetRecoilState(messagingAtom);
//   return (
//     <button
//       onClick={() => {
//         setMessageNotification((c) => c + 1);
//       }}
//     >
//       Profile
//     </button>
//   );
// }
// export default App;

////////////////////////////////// Learn what are Selector first do problem using useMemo then selector //////////////////////////
/*
The problem is show the total notificaton on the profile page by sum of all the notifications Counts 
*/
// import "./App.css";
// import { RecoilRoot, useRecoilValue } from "recoil";
// import {
//   jobsAtom,
//   messagingAtom,
//   networkAtom,
//   notificationAtom,
// } from "./components/atoms/atoms";
// import { useMemo } from "react";

// /// Note: When anytime want to access the atom then need to wrap with the RecoilRoot
// function App() {
//   return (
//     <RecoilRoot>
//       <LinkedInBar></LinkedInBar>
//     </RecoilRoot>
//   );
// }

// function LinkedInBar() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsNotificationCount = useRecoilValue(jobsAtom);
//   const notificationCount = useRecoilValue(notificationAtom);
//   const MesaageNotificationCount = useRecoilValue(messagingAtom);

//   const totalNoficationCount = useMemo(() => {
//     return (
//       networkNotificationCount +
//       jobsNotificationCount +
//       notificationCount +
//       MesaageNotificationCount
//     );
//   }, [
//     networkNotificationCount,
//     jobsNotificationCount,
//     notificationCount,
//     MesaageNotificationCount,
//   ]);
//   return (
//     <>
//       <button>Home</button>
//       <button>
//         My Network (
//         {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
//       </button>
//       <button>Jobs ({jobsNotificationCount})</button>
//       <button>Messages ({MesaageNotificationCount})</button>
//       <button>Notification ({notificationCount})</button>
//       <button>Profile ({totalNoficationCount})</button>
//     </>
//   );
// }
// export default App;

///////////// Use the Selector and solve the same problem totalCount

import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./components/atoms/atoms";

/// Note: When anytime want to access the atom then need to wrap with the RecoilRoot
function App() {
  return (
    <RecoilRoot>
      <LinkedInBar></LinkedInBar>
    </RecoilRoot>
  );
}

function LinkedInBar() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const MesaageNotificationCount = useRecoilValue(messagingAtom);
  /// This is good approach then uesMemo bcz you can access from anywhere and also changes in selector for diff. logic easy
  const totalNotifcationCount = useRecoilValue(totalNotificationSelector); /// Selector
  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messages ({MesaageNotificationCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Profile ({totalNotifcationCount})</button>
    </>
  );
}
export default App;
