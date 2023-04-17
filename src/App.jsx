import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import TrendingMovieList from "./components/MovieList";

function App() {
  return (
    <div className="myApp">
      <div className="jumbo">
        <ImageCarousel />
      </div>

      <div>
        <TrendingMovieList />
      </div>

      <div className="footer">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
