import "./App.css";
import Friend from "./components/Friends/Friend";
import DogGallery from "./components/DogsGallery/DogGallery";
import RandomJoke from "./components/Jokes/RandomJoke";

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
