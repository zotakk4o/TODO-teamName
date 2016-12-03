import React, { Component } from 'react';

export default class LoginView extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Username </label>
                        <input type="text"
                               name="username"
                               className="form-control"
                               value={this.props.username}
                               onChange={this.props.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password </label>
                        <input type="password"
                               name="password"
                               className="form-control"
                               value={this.props.password}
                               onChange={this.props.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               value='Login'
                               className="btn btn-default"
                        />
                    </div>
                </form>
            </div>

        );
    }
}