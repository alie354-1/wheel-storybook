import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import Hls from 'hls.js';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Media } from './types';

export interface MediaPlayerProps {
  media: Media;
}

export const MediaPlayer: React.FC<MediaPlayerProps> = ({ media }) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (media.type === 'audio' && waveformRef.current) {
      // Destroy previous instance
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'violet',
        progressColor: 'purple',
        barWidth: 2,
        cursorWidth: 1,
        height: 100,
      });

      wavesurfer.current.load(media.src);

      const playButton = document.createElement('button');
      playButton.innerText = 'Play/Pause';
      playButton.onclick = () => wavesurfer.current?.playPause();

      // Clear previous buttons before appending a new one
      while (waveformRef.current.firstChild) {
        waveformRef.current.removeChild(waveformRef.current.firstChild);
      }

      waveformRef.current.appendChild(playButton);


      return () => {
        wavesurfer.current?.destroy();
      };
    } else if (media.type === 'video' && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(media.src);
        hls.attachMedia(videoRef.current);
      }
    }
  }, [media.src, media.type]);

  const renderPlayer = () => {
    switch (media.type) {
      case 'video':
        return <video ref={videoRef} src={media.src} controls className="w-full" />;
      case 'audio':
        return <div ref={waveformRef} />;
      case 'presentation':
        return (
          <div>
            <img src={media.slides?.[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="flex justify-between mt-2">
              <Button
                onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                disabled={currentSlide === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  setCurrentSlide((prev) => Math.min(media.slides?.length || 0 - 1, prev + 1))
                }
                disabled={currentSlide === (media.slides?.length || 0) - 1}
              >
                Next
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      {media.title && <h3 className="text-lg font-bold">{media.title}</h3>}
      {renderPlayer()}
      {media.description && <p className="mt-2">{media.description}</p>}
    </Card>
  );
};
