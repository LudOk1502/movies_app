import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovieByGenre} from "../../services/movie.api.service";
import {moviesByGenre} from "../../redux/actions/actions";
import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function MoviesByGenre({location: {genre_id}}) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {movies} = state;

    useEffect(() => {
        getMovieByGenre(genre_id).then(value => dispatch(moviesByGenre(value.data.results)))
    }, [])

    return (
        <div className={'wrap_movies_list'}>
            {
                movies.map(value => <div><MoviesListCard key={value.id} item={value}/></div>)
            }
        </div>
    );
}