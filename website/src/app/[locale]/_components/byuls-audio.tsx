'use client';

import { Fragment } from 'react';

export const ByulsAudio = () => {
  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useMediaCaption: not needed as the audio is only a pronunciation guide. */}
      <audio id="byuls-audio" className="hidden">
        <source src="/byuls-audio.mp3" type="audio/mpeg" />
      </audio>

      <button
        type="button"
        className="mb-0.5 cursor-pointer px-0.5 align-middle"
        aria-label="Play audio"
        onClick={async () => {
          const audio = document.getElementById('byuls-audio') as HTMLAudioElement;
          if (audio) {
            await audio.play();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Audio</title>
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
      </button>
    </Fragment>
  );
};
