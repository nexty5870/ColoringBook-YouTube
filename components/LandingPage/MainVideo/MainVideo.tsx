"use client";
import React, { useLayoutEffect, useState } from "react";
import videojs from "video.js";
import Lottie from "lottie-react";

import "video.js/dist/video-js.css";
import PlaySvg from "./PlaySvg";
import backgroundStars from "../../../public/assets/lottie/background-stars-lottie.json";

const options = {
  responsive: true,
  fluid: true,
  muted: true,
  autoplay: true,
  loop: true,
  controls: false,
  sources: [
    {
      src: "https://customer-ypcto48488wb4tyx.cloudflarestream.com/3ebe7fc7a4589b1459b36ff7bcbebbe0/manifest/video.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

// Command for removing audio from a video
/// ffmpeg -i ./public/assets/sample-tutorial.mp4 -c:v copy -an sample-tutorial-no-voice.mp4

// Command for splitting video into chunks for 2 secs
/// ffmpeg -i ./public/assets/sample-tutorial-no-voice.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_time 2 -hls_list_size 0 -hls_segment_filename ./public/assets/main-video-chunks/output%03d.ts ./public/assets/main-video-chunks/output.m3u8

const MainVideo = () => {
  const [isFullScreenOpened, setIsFullScreenOpened] = useState<boolean>(false);
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  useLayoutEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(
        videoElement,
        { ...options },
        () => {
          videojs.log("player is ready");
          // onReady && onReady(player);
        }
      ));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(true);
      player.src([
        {
          src: "https://customer-ypcto48488wb4tyx.cloudflarestream.com/3ebe7fc7a4589b1459b36ff7bcbebbe0/manifest/video.m3u8",
          type: "application/x-mpegURL",
        },
      ]);
    }
  }, [videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useLayoutEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const handleOpenFullScreen = () => {
    setIsFullScreenOpened(true);
  };

  return (
    <>
      <div className="relative flex items-center justify-center mt-10">
        <div className="absolute top-[10%] bottom-0 left-0 right-0">
          <Lottie animationData={backgroundStars} loop={true} autoplay={true} />
        </div>
        <div className="m-5 w-[80%] p-4 bg-white border-[1px] border-border-disabled rounded-2xl">
          <div data-vjs-player className="relative">
            {/** We can add open full screen functionality when clicked on video itself like this if needed in the future */}
            <button
              onClick={() => null}
              className="absolute top-0 right-0 left-0 bottom-0 z-[1] opacity-10"
            ></button>
            <div
              onClick={handleOpenFullScreen}
              style={{
                backgroundColor: "rgba(255,255,255, 0.5)",
                backdropFilter: "blur(5px)",
              }}
              className=" rounded-[100px] w-[150px] h-[150px] max-sm:h-[64px] max-sm:w-[64px] bg-slate-100 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y[-50%] z-10 flex justify-center items-center"
            >
              <PlaySvg />
            </div>
            <div ref={videoRef} className="overflow-hidden rounded-xl" />
          </div>
        </div>
      </div>
      {isFullScreenOpened && (
        <>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black opacity-65"
            onClick={(e) => setIsFullScreenOpened(false)}
          ></div>
          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40 h-[85%] w-[90%] rounded-2xl bg-white overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/b6rUiE8jdow"
            ></iframe>
          </div>
        </>
      )}
    </>
  );
};

export default MainVideo;
