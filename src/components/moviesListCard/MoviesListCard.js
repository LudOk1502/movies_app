import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function MoviesListCard({item}) {
    return (
        <div>
            <div className={'card'}><img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                         alt={`${item.original_title}`}/>
                <p>"{item.title}" <br/>
                    <Link to={{pathname: '/moviesInfo/' + item.id, state: item}}>Детальніше</Link></p>
                <p>Рейтинг: {item.vote_average}</p>
                <ReactStars
                    count={item.vote_average}
                    size={20}
                    color={"#f4980f"}
                ></ReactStars>
            </div>
        </div>
    );
}