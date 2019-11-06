var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max
    },
    error: function(response) {
      console.log('Failed Request');
    },
    success: function(data) {
      //return data.items;
      callback(data.items);
    }
  });
};

export default searchYouTube;
