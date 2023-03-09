import { HFlow, VFlow, Text, Button } from "bold-ui";
import { css } from "@emotion/core";
import music from "../assets/music/Rough Nights-Artificial.MusicMehulShaRma-(NoCopyrightMusic).mp3";
import { useState } from "react";
import { BsFillPauseFill, BsPlay } from "react-icons/bs";

// so puxar isso em todas as paginas que continua tocando
export const song = new Audio(music);
song.volume = 0.2;

function MusicPlayer() {
  let [isPause, setPause] = useState(false);
  let [isPlaying, setPlaying] = useState(false);

  function play() {
    if (!isPlaying) {
      song.play();
      setPause(true);
      setPlaying(true);
    } else {
      song.pause();
      setPause(false);
      setPlaying(false);
    }
  }
  return (
    <VFlow
      style={css`
        align-items: center;
      `}
    >
      <HFlow>
        <Text
          style={css`
            color: #c377cd;
            margin-top: 1rem;
          `}
          fontSize={1.8}
          fontWeight="bold"
        >
          PLAY ME!
        </Text>
        <Button
          size="medium"
          skin="outline"
          style={css`
            color: white;
          `}
          onClick={() => play()}
        >
          {!isPause ? (
            <Text
              fontWeight="bold"
              fontSize={1.8}
              style={css`
                color: white;
              `}
            >
              <BsPlay />
            </Text>
          ) : (
            <Text
              fontWeight="bold"
              fontSize={1.8}
              style={css`
                color: white;
              `}
            >
              <BsFillPauseFill />
            </Text>
          )}
        </Button>
      </HFlow>
    </VFlow>
  );
}

export default MusicPlayer;
