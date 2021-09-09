import UserInfo from "../userInfo/UserInfo";
import {Link} from "react-router-dom";
import './Header.css';


export default function Header() {
    return (
        <div className={'wrap_header'}>
            <div className={'logo'}><img
                src="http://www.bristollib.com/wp-content/uploads/2017/09/clipart-popcorn-and-movie-30.png"
                alt="logo"/></div>
            <div className={'header'}>
                <h1>MOVIES APP</h1>
                <div className={'menu'}><Link to={'/moviesList'}>Домашня сторінка</Link> <br/>
                    <Link to={'/filterMovies'}>Шукати фільм</Link></div>
            </div>
            <UserInfo/>

        </div>
    );
}