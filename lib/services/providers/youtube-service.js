import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { youtubeApiKey } = publicRuntimeConfig;

class YouTubeService {
  parseTrack(track) {
    return {
      url: `https://www.youtube.com/watch?v=${track.id.videoId}`,
      artworkUrl: track.snippet.thumbnails.medium.url,
      poster: track.snippet.channelTitle,
      title: track.snippet.title,
      provider: 'YouTube'
    };
  }

  parseDuration(duration) {
    // eslint-disable-next-line
    return eval(
      duration
        .substring(2)
        .replace('H', '* 60000 * 60 +')
        .replace('M', '* 60000 +')
        .replace('S', ' * 1000')
        .replace(/\+$/, '')
    );
  }

  async search(query) {
    const tracks = [];
    const res = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=${query}&maxResults=25&part=snippet&type=video&videoEmbeddable=true&key=${youtubeApiKey}`
    );
    res.data.items.forEach(track => {
      tracks.push(this.parseTrack(track));
    });
    const idList = res.data.items.reduce((a, b) => a + b.id.videoId + ',', '');
    const detailRes = await axios.get(
      `https://content.googleapis.com/youtube/v3/videos?id=${idList}&part=contentDetails&key=${youtubeApiKey}`
    );
    detailRes.data.items.forEach((track, index) => {
      tracks[index].duration = this.parseDuration(
        track.contentDetails.duration
      );
    });
    return tracks;
  }
}

export default new YouTubeService();
