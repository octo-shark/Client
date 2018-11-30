export const pad = (int) => ((int < 10) ? '0'+int : int);

export const humanDuration = (ms) => ({
  hour: Math.floor(ms / (1000*60*60)),
  minute: Math.floor(ms / (1000*60) % 60),
  second: Math.floor((ms / 1000) % 60)
});

export const tFormat = (ms) => {
  let dur = humanDuration(ms);

  if (dur.hour) return `${dur.hour}h ${pad(dur.minute)}m`;
  if (dur.minute) return `${dur.minute}m ${pad(dur.second)}s`;
  if (dur.second) return `${dur.second}s`;
};
