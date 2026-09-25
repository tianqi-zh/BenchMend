(() => {
  'use strict';

  document.querySelectorAll('.play-pair').forEach(button => {
    const section = button.closest('.case');
    const videos = Array.from(section.querySelectorAll('video'));
    button.addEventListener('click', async () => {
      if (videos.some(video => !video.paused)) {
        videos.forEach(video => video.pause());
        button.textContent = 'Play both from start';
        return;
      }
      document.querySelectorAll('video').forEach(video => video.pause());
      document.querySelectorAll('.play-pair').forEach(other => {
        other.textContent = 'Play both from start';
      });
      videos.forEach(video => { video.currentTime = 0; });
      button.disabled = true;
      const outcomes = await Promise.allSettled(videos.map(video => video.play()));
      button.disabled = false;
      const failed = outcomes.some(outcome => outcome.status === 'rejected');
      if (failed) videos.forEach(video => video.pause());
      section.querySelector('.play-status').textContent = failed
        ? 'Use each video’s play control to start playback.' : '';
      button.textContent = failed ? 'Play both from start' : 'Pause both';
    });
    videos.forEach(video => video.addEventListener('ended', () => {
      if (videos.every(item => item.paused || item.ended)) {
        button.textContent = 'Play both from start';
      }
    }));
    button.hidden = false;
  });

  document.querySelectorAll('.clip video').forEach(video => {
    video.addEventListener('error', () => {
      const meta = video.closest('figure').querySelector('.clip-meta');
      if (!meta.querySelector('.media-error')) {
        meta.insertAdjacentHTML('beforeend',
          '<br><span class="media-error" role="alert">Playback unavailable. Try the MP4 download link.</span>');
      }
    });
  });
})();
