import ReactPlayer from "react-player";

const Reels = () => {
  return (
    <>
      <ReactPlayer
        src="https://res.cloudinary.com/nikhilmaurya/video/upload/v1752334434/1024X768_3_ro1bru.mp4"
        playing={true}
        height="500px"
        volume={0}
        style={{
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <ReactPlayer
        src="https://res.cloudinary.com/nikhilmaurya/video/upload/v1752334434/1024X768_3_ro1bru.mp4"
        playing={true}
        height="500px"
        volume={0}
        style={{
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    </>
  );
};
export default Reels;
