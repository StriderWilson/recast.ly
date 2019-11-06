
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.queryDog = {
      key: YOUTUBE_API_KEY,
      query: 'dog',
      max: 5
    };
    this.default = undefined;
    console.log(this.props.searchYouTube(this.queryDog, (data) => {
      return data;
    }));

    console.log(this.default);
    this.state = {
      videos: exampleVideoData,
      current: exampleVideoData[0]
    };
  }

  handleClick(childData) {
    this.setState({current: childData});
  }

  handleQuery(query) {
    var request = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5};
    searchYouTube(request, (data) => {
      this.setState({
        videos: data,
        current: data[0]
      });
    });

  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search query = {this.handleQuery.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
