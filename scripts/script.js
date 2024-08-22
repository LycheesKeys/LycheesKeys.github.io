const DURATION = 500;
const KEY_SCALES = [2, 5, 15, 2, 10, 12, 4];
let tl = anime.timeline({
  direction: 'alternate',
  duration: DURATION,
  loop: true,
  easing: 'linear'
});

KEY_SCALES.forEach((scale, seed) => {
  tl.add({
    targets: ['.disp', '.turb'],
    scale: scale,
    seed: seed,
    duration: DURATION / KEY_SCALES.length
  });
});

const openInNewTab = (url) => {
  window.open(url, '_blank');
};

const copyToClipboard = (text, successCallback = null, failureCallback = null) => {
  navigator.clipboard.writeText(text).then(
      () => {
          /* clipboard successfully set */
          if (!!successCallback) successCallback();
      },
      () => {
          /* clipboard write failed */
          if (!!failureCallback) failureCallback();
      }
  );
};