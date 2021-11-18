import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import CreatePost from './components/Post/CreatePost';
import EditPost from './components/Post/EditPost';

class App extends React.Component {
    state = {
        posts: [],
        post: null,
        token: null,
        user: null
    };

    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((response) => {
            this.setState({
                data: response.data
            })
        })
        .catch((error) => {
            console.error(`Error fetching data: ${error}`);
        })

        this.authenticationUser();
    }

    componentDidMount() {
        axios.get('https://localhost:5000')
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`);
            })
    }

    authenticateUser = () => {
        const token = localStorage.getItem('token');

        if(!token) {
            localStorage.removeItem('user')
            this.setState({ user: null });
        }

        loadData =() => {
            const { token } =this.state;
        

        if (token) {
            const config = {
                header: {
                    'x-auth-token': token
                }
            }
            axios.get('http://localhost:5000/api/auth', config)
            .then((response) => {
                localStorage.setItem('user', response.data.name)
                this.setState({ user: response.data.name })
            })
            .catch((error) => {
                localStorage.removeItem('user');
                this.setState({ user: null });
                console.error(`Error logging in: ${error}`);
            })
        }
    }
    };

    logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({ user: null, token: null });
    }

    render() {
        let { user, posts } =this.state;
        const authProps = {
            authenticationnUser: this.authenticateUser
        };
    }

    viewPost = post => {
        console.log(`view ${post.title}`);
        this.setState({
            post: post
        });
    };
}

export default App;
