export const pad = (int) => ((int < 10) ? '0'+int : int);

export const humanDuration = (ms) => ({
  hours: Math.floor(ms / (1000*60*60)),
  minutes: Math.floor(ms / (1000*60) % 60),
  seconds: Math.floor((ms / 1000) % 60)
});

export const tFormat = (dur) => {
  if (dur.hours >= 1) return `${dur.hours}h ${pad(dur.minutes)}m`;
  if (dur.minutes >= 1) return `${dur.minutes}m ${pad(dur.seconds)}s`;
  return `${dur.seconds}s`;
};
