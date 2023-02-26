import { HFlow, VFlow, Text, Button } from "bold-ui";
import { css } from "@emotion/core";
import music from "../assets/music/Rough Nights-Artificial.MusicMehulShaRma-(NoCopyrightMusic).mp3";
import { useState } from "react";
import { BsArrowRightShort, BsFillPauseFill, BsPlay } from "react-icons/bs";

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
            color: white;
            margin-top: 1rem;
          `}
          fontSize={1}
          fontWeight="bold"
        >
          PLAY ME! <BsArrowRightShort />
        </Text>
        <Button
          size="large"
          skin="outline"
          style={css`
            color: white;
          `}
          onClick={() => play()}
        >
          {!isPause ? <BsPlay /> : <BsFillPauseFill />}
        </Button>
      </HFlow>
    </VFlow>
  );
}

export default MusicPlayer;
