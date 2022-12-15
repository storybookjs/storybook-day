import { useEffect } from 'react';

function loadVideos() {
  console.log('####');

  const lazyVideos = [].slice.call(
    document.querySelectorAll('video.js-lazy-video')
  ) as HTMLVideoElement[];

  if ('IntersectionObserver' in window) {
    const lazyVideoObserver = new IntersectionObserver(function (entries) {
      entries.forEach((video: IntersectionObserverEntry) => {
        if (video.isIntersecting) {
          console.log(video);

          for (const source in video.target.children) {
            const videoSource = video.target.children[source] as HTMLSourceElement;
            if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
              videoSource.src = videoSource.dataset.src as string;
            }
          }

          (video.target as HTMLVideoElement).load();
          video.target.classList.remove('js-lazy-video');
          lazyVideoObserver.unobserve(video.target);
          console.log({ target: video.target });
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
}

export function useLazyLoadVideo() {
  useEffect(() => {
    loadVideos();
  }, []);
}
