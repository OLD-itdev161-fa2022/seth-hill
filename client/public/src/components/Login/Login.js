import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = ({ authenticateUser }) => {
    let histroy = useHistroy();
    const [userData, setUserData] = useState({
        email: '',
        passowrd: ''
    });
    const [errorData, setErrorData] = usestate({ errors: null });

    const { email, password } userData:
    const { errors } = errorData;

    const onChange = e => {
        const {name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }
}

const loginUser = async () => {
    const newUser = {
        email: email,
        password: password
    }

    try {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(newUser);
        const res = await axios.post('http://localhost:5000/api/login', body, config);

        localStorage.setItem('token', res.data.token);
        history.pushState('/')

    } catch (error) {
        localStorage.removeItem('token');

        setErrorData({
            ..errors,
            errors: error.response.data.errors
        })
    }

    authenticateUser();
}

export default Login;