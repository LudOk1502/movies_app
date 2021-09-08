import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";
import MoviesByGenre from "./components/moviesByGenre/MoviesByGenre";
import FormFilterMovies from "./components/formFilterMovies/FormFilterMovies";
import Header from "./components/header/Header";

function App() {

    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path={'/moviesList'} component={MoviesList}/>
                <Route path={'/moviesInfo'} component={MovieInfo}/>
                <Route path={'/filterMovies'} component={FormFilterMovies}/>
                <Route path={'/moviesByGenre'} component={MoviesByGenre}/>
            </div>
        </Router>
    );
}

export default App;
