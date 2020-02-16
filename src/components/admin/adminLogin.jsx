import React, { Component } from 'react';
import axios from 'axios'
class AdminLogin extends Component {
    state = {
        admin: [

        ],
        username: "",
        password: "",
        loggedIn: false
    }
    async componentDidMount() {
        const { data } = await axios.get('/api/Admins')
        console.log(data)
        this.setState({ admin: data })
    }
    handleSubmitAdmin = (e) => {
        e.preventDefault();
        this.state.admin.map(admin => {

            if (this.state.username == admin.username && this.state.password == admin.password) {
                console.log("Admin LoggedIn")
                this.props.history.replace('/')
            }
            else {
                console.log(this.state.username + " must be qual to " + admin.username);
                console.log("Try Again")
            }
        })
    }
    handleInput = (event) => {
        if (event.target.name == 'username') {

            this.setState({ username: event.target.value })
        }
        if (event.target.name == 'password') {

            this.setState({ password: event.target.value })
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center my-5">Admin Login</h1>
                <form onSubmit={this.handleSubmitAdmin} className="admin-form">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" name="username" placeholder="Enter Username" onChange={this.handleInput} value={this.state.username} />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>

        );
    }
}

export default AdminLogin;