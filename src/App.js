import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from './components/header/Header';
import Posts from './components/Allposts/Posts';
import PostContent from './components/PostContent/PostContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Posts />
      <img className="line" src="/images/Line.png" alt="" />
      <PostContent />
    </div>
  );
}

export default App;
