import { useEffect, useRef, useState } from "react";


const VideoPlayer = ({videoUrl}) => {
    const videoRef = useRef(null);
    const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);

    const isYouTube = (url) => {
        const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return ytRegex.test(url);
      };

      useEffect(() => {
        if (isYouTube(videoUrl)) {
            setIsYoutubeVideo(true);
          } else {
            setIsYoutubeVideo(false);
          }
      }, [videoUrl])

      const getYouTubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
          return videoId.substring(0, ampersandPosition);
        }
        return videoId;
      };

      return (
        <div className="custom-video-player">
          {isYoutubeVideo ? (
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${getYouTubeEmbedUrl(videoUrl)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              width="100%"
              height="400px"
              controls
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      );
}

export default VideoPlayer;