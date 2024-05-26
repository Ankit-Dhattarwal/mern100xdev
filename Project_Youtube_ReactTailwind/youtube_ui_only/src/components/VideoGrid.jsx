import { VideoCard } from "./VideoCard";

const VIDEO = [
  {
    channelName: "Ankit Dhattarwal",
    thumb: "photo.jpeg",
    channelLogo: "Ankit.jpg",
    title:
      "Ankit Dhattarwal: This site make by ankit dhattarwal in the 2024 and try to clone of youtube where you are able to upload your content with the specific title and description.",
    view: "45M",
    timeStamp: "1 Year Ago",
  },
  {
    channelName: "Amit Dhattarwal",
    thumb: "photo.jpeg",
    channelLogo: "Ankit.jpg",
    title:
      "Amit Dhattarwal: This site make by ankit dhattarwal in the 2024 and try to clone of youtube where you are able to upload your content with the specific title and description.",
    view: "80M",
    timeStamp: "1 Year Ago",
  },
  {
    channelName: "Aman Dhattarwal",
    thumb: "photo.jpeg",
    channelLogo: "Ankit.jpg",
    title:
      "Aman Dhattarwal: This site make by ankit dhattarwal in the 2024 and try to clone of youtube where you are able to upload your content with the specific title and description.",
    view: "78M",
    timeStamp: "1 Year Ago",
  },
  {
    channelName: "Ajay Dhattarwal",
    thumb: "photo.jpeg",
    channelLogo: "Ankit.jpg",
    title:
      "Ajay Dhattarwal: This site make by ankit dhattarwal in the 2024 and try to clone of youtube where you are able to upload your content with the specific title and description.",
    view: "4M",
    timeStamp: "1 Year Ago",
  },
  {
    channelName: "Vikas Dhattarwal",
    thumb: "photo.jpeg",
    channelLogo: "Ankit.jpg",
    title:
      "Vikas Dhattarwal: This site make by ankit dhattarwal in the 2024 and try to clone of youtube where you are able to upload your content with the specific title and description.",
    view: "405M",
    timeStamp: "1 Year Ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEO.map((video) => (
        <div>
          <VideoCard>
            channelName={video.channelName}
            thumb={video.thumb}
            channelLogo={video.channelLogo}
            title={video.title}
            view={video.view}
            timeStamp={video.timeStamp}
          </VideoCard>
        </div>
      ))}
    </div>
  );
};
