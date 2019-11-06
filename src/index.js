// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

var queryDog = {
  key: YOUTUBE_API_KEY,
  query: 'dog',
  max: 5
};

// var data = undefined;

// searchYouTube(queryDog, function(data) {
//   data = this.data;
// });

ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));