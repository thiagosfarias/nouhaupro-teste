import React, { Component } from "react";
import FirebaseService from '../../services/firebaseService';

class SignUpController extends Component {
    submit = (event) => {
        event.preventDefault();

        const { nome } = this;
        const { email } = this;
        const { password } = this;

        const newId = FirebaseService.pushData('leituras', {
            nome,
            email,
            password
        });

        this.props.history.push(urls.data.path);

    };

    render = () => (<React.Fragment>

        <form onSubmit={this.submit}>
            <TextField className="input-field"
                type="text"
                defaultValue={''}
                label="nome"
                required
                onChange={e => this.nome = e.target.value} />
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
                Cadastrar
            </Button>
        </form>

    </React.Fragment>

    )


}

export default SignUp;