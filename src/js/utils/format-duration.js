const formatDuration = duration => {
  const seconds = parseInt((duration / 1000) % 60, 10);
  return parseInt(duration / 60000) + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export default formatDuration;
