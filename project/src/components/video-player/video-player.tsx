import { useEffect, useRef, useState } from 'react';
import { FilmType } from '../../types/films';

type VideoPlayerProps = {
  film: FilmType;
}

function VideoPlayer({ film }: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (!videoRef.current) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isVideoPlayerMounted = false;
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={film.previewVideoLink}
      poster={film.posterImage}
      muted
      autoPlay
    />
  );
}

export default VideoPlayer;
