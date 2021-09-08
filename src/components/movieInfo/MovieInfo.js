import './MovieInfo.css';
import GenreBadge from "../genreBadge/GenreBadge";
import {Link} from "react-router-dom";

export default function MovieInfo({location: {state}}) {

    return (
        <div className={'wrap_movieInfo'}>
            <div><img className={'img_info'} src={`https://image.tmdb.org/t/p/w400/${state.poster_path}`}
                      alt={`${state.original_title}`}/></div>
            <div className={'text_info'}><h2>{state.original_title}<br/> ({state.release_date})</h2>
                <div> Жанр:
                    {
                        state.genre_ids.map(value => <div><Link to={{pathname: '/moviesByGenre', genre_id: value}}>
                            <GenreBadge item={value}/></Link></div>)
                    }
                </div>
                <div> Опис: <br/>
                    {state.overview}</div>
            </div>
        </div>
    );
}