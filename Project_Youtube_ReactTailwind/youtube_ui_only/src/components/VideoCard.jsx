export function VideoCard(props) {
  return (
    <div className="p-3">
      <img className="rounded-xl" src={props.thumb}></img>
      <div className="grid grid-cols-12 bg-red-500 pt-2">
        <div className="col-span-1">
          <img
            className={"rounded-full w-12 h-12"}
            src={props.channelLogo}
          ></img>
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.channelName}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.view} | {props.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
}
