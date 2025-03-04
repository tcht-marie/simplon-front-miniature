import "./login.scss";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/UserService.js";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import { AuthContext } from "../../config/AuthProvider.jsx";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const {loginContext} = useContext(AuthContext);
    const navigate = useNavigate();
    const {login} = UserService();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password)
            if (response && response.data) {
                loginContext();
                navigate('/posts');
            }
        } catch (error) {
            setMessage('Invalid credentials');
            console.log(error);
        }
    }

    return (
        <div id="formContainer">
            {/* TODO rajouter l'action action="/mapage"*/}
            <form method="post" onSubmit={handleLogin} id="connectionForm">
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="Username"
                    placeholder="Enter your username"
                    useValueAsLabel={false}
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="Password"
                    placeholder="Enter your password"
                    useValueAsLabel={false}
                />
                <Link to="/auth/register" style={{textDecoration: 'none', color: "black"}}>
                    Click here if you don't have an account yet!
                </Link>
                <p>{message}</p>
                <Button text="Login" type="submit"></Button>
            </form>
        </div>
    );
}

export default Login;