import {authenticationUser, guest_session} from "../../services/movie.api.service";
import {useState} from "react";
import './UserInfo.css';
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/actions";

export default function UserInfo() {
    let dispatch = useDispatch();
    let [formState, setFormState] = useState({username: '', password: '', password_confirm: '', email: ''});
    let [toggle, setToggle] = useState('enter');
    let [formToggle, setFormToggle] = useState('formNone');
    let [formEnterToggle, setFormEnterToggle] = useState('formFlex');
    let [btnToggle, setBtnToggle] = useState('btnFlex');


    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
    };

    let onSaveClick = () => {
        formState.password !== formState.password_confirm ?
            alert("Пароль не збігається") :
            authenticationUser().then(value => dispatch(addUser(formState)));
        alert("На вказаний e-mail надіслано лист-підтвердження облікового запису.");
        setToggle('enter');
        setFormToggle('formFlex');
        setFormEnterToggle('formNone');
    }

    let onRegistrationClick = () => {
        setToggle('registration');
        setBtnToggle('btnNone');
    }
    let onEnterClick = () => {
        guest_session().then(value => console.log(value));
        setFormToggle('formFlex');
        setFormEnterToggle('formNone');
    }
    return (
        <div className={'user_box'}>
            <form className={formEnterToggle} onSubmit={onFormSubmit}>
                <label onInput={'username'}>Ім’я користувача:</label>
                <input type="text" name={'username'} value={formState.username}
                       onChange={onFormInputChange}/>
                <label onInput={'password'}>Пароль:</label>
                <input type="password" name={'password'} value={formState.password}
                       onChange={onFormInputChange}/>
                <div className={btnToggle}>
                    <button onClick={onEnterClick}>Увійти</button>
                    <button onClick={onRegistrationClick}>Зареєструватись</button>
                </div>
                <div className={toggle}>
                    <label onInput={'password_confirm'}>Підтвердження паролю:</label>
                    <input type="password" name={'password_confirm'} value={formState.password_confirm}
                           onChange={onFormInputChange}/>
                    <label onInput={'email'}>E-mail:</label>
                    <input type="text" name={'email'} value={formState.email}
                           onChange={onFormInputChange}/>
                    <button className={'btn_save'} onClick={onSaveClick}>Зареєструватись</button>
                </div>
            </form>
            <form className={formToggle}>
                <img className={'user_icon'}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
                     alt="logo"/>
                <h4>{formState.username}</h4>
            </form>
        </div>
    );
}