import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresMovie} from "../../services/movie.api.service";
import {genres_Movies} from "../../redux/actions";

export default function GenreBadge({item}) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {genres} = state;

    useEffect(() => {
        genresMovie().then(value => dispatch(genres_Movies(value.data.genres)))
    }, [])

    return (
        <div>
            {
                genres.map(value => {
                    if (value.id === item) {
                        return item = value.name
                    }
                })
            }
        </div>
    );
}