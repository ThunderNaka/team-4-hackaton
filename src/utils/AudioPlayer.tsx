import React, { useEffect, useState } from "react";

interface AudioPlayerProps {
  text: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ text }) => {
  const [audioSrc, setAudioSrc] = useState<string | undefined>();
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed.", error));
    }
  };

  useEffect(() => {
    fetch("https://api.openai.com/v1/engines/tts-1/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: text,
        voice: "alloy",
      }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setAudioSrc(url);
      })
      .catch((error) => {
        console.error("THIS IS AN ERROR SIUUU:", error); // Handle the error
      });
  }, [text]);

  return (
    <div>
      {/* <audio src={audioSrc} ref={audioRef} controls /> */}
      <audio src={audioSrc} ref={audioRef} controls>
        <track kind="captions" />
      </audio>
      <button className="rounded-xl bg-red-500 p-4" onClick={playAudio}>
        Play
      </button>
    </div>
  );
};

export default AudioPlayer;
