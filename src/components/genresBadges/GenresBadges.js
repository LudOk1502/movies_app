import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import React from "react";
import {Badge} from 'reactstrap';
import {genresMovie, getMovieByGenre} from "../../services/movie.api.service";
import {genres_Movies, moviesByGenre} from "../../redux/actions";
import './GenresBadges.css';


export default function GenresBadges({page}) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let [genreBadgeChange, setGenreBadgeChange] = useState(0);
    let {genres} = state;

    useEffect(() => {
        genresMovie().then(value => dispatch(genres_Movies(value.data.genres)))
    }, [])

    let onClickGenre = (e) => {
        setGenreBadgeChange(e.target.id)
    }
    useEffect(() => {
        getMovieByGenre(genreBadgeChange, page).then(value => dispatch(moviesByGenre(value.data.results)))
    }, [genreBadgeChange, page]);

    return (
        <div className={'badge_box'}>{
            genres && genres.map(value => <Badge className={'badge'} color="secondary" id={value.id}
                                                 onClick={onClickGenre}>{value.name}</Badge>)}
        </div>
    );
}