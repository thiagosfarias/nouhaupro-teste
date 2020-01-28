import React, { Component } from "react";
import FirebaseService from '../../services/firebaseService';

class SignIpController extends Component {
    submit = (event) => {
        event.preventDefault();

        const { email } = this;
        const { password } = this;

        //login

    };

    render = () => (<React.Fragment>

        <form onSubmit={this.submit}>
            <TextField className="input-field"
                type="email"
                defaultValue={''}
                label="E-mail"
                required
                onChange={e => this.email = e.target.value} />
            <TextField className="input-field"
                type="password"
                defaultValue={''}
                label="senha"
                required
                onChange={e => this.password = e.target.value} />

            <Button type="submit"
                style={{ marginTop: '20px', display: 'inline-block' }}>
                Login
            </Button>
        </form>

    </React.Fragment>

    )


}

export default SignIn;