import "./login.scss";
import {useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/UserService.js";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { register } = UserService();


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await register(username, password);
            console.log(response.data)
            if (response && response.data) {
                navigate('/auth/login');
            }
        } catch (error) {
            setMessage('Registration failed.');
            console.log(error);
        }
    };

    return (
        <div id="formContainer">
            <form method="post" onSubmit={handleRegister} id="connectionForm">
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="Username"
                    placeholder="Enter your username"
                    className="text"
                    useValueAsLabel={false}
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="Password"
                    placeholder="Enter your password"
                    className="text"
                    useValueAsLabel={false}
                />
                <p>{message}</p>
                <Button text="Sign up" type="submit"></Button>
            </form>
        </div>
    );
};

export default Register;