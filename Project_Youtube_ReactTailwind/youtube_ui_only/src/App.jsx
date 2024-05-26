import "./App.css";
import { AppBar } from "./components/AppBar";
import { VideoCard } from "./components/VideoCard";
import { VideoGrid } from "./components/VideoGrid";

function App() {
  return (
    <>
      <AppBar />
      <VideoGrid />
    </>
  );
}

export default App;

// {/* <VideoCard
//       channelName={"Ankit Dhattarwal"}
//       thumb={"photo.jpeg"}
//       channelLogo={"Ankit.jpg"}
//       title={
//         "Ankit Dhattarwal: This site make by ankit dhattarwal in the 2024 and try to clone of youtube where you are able to upload your content with the specific title and description."
//       }
//       view={"45M"}
//       timeStamp={"1 Year Ago"}
//     /> */}
