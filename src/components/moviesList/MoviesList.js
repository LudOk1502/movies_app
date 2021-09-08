import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {discoverMovie} from "../../services/movie.api.service";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import './MoviesList.css';
import PagePagination from "../pagination/PagePagination";
import {discover_Movies} from "../../redux/actions";

export default function MoviesList() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {movies} = state;

    let [page, setPage] = useState(1);

    useEffect(() => {
        discoverMovie(page).then(value => dispatch(discover_Movies(value.data.results)))
    }, [page])

    return (<div className={'home'}>
            <div className={'wrap_movies_list'}>
                {
                    movies.map(value => <div className={'movies_list_card'}><MoviesListCard key={value.id}
                                                                                            item={value}/>
                    </div>)
                }
            </div>
            <div><PagePagination setPage={setPage}/></div>
        </div>
    );
}