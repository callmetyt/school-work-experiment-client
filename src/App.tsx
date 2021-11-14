import "./App.scss";

import Header from "./components/Header";
import Search from "./components/Search";
import videoSrc from "./assets/gongquhunjian_1080.min.mp4";
import List from "./containers/ListContainer";
import NewList from "./containers/newList";

function App() {
  return (
    <div className="App">
      <video
        className="video-react-video"
        preload="auto"
        loop
        autoPlay
        playsInline
        src={videoSrc}
        tabIndex={-1}
      ></video>
      <div className="overlay"></div>
      <Header />
      <Search />
      <NewList />
      <List />
    </div>
  );
}

export default App;
