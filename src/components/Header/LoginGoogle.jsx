import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import { logoutAction, signupAction } from '../../redux/actions';

class LoginGoogle extends React.Component {

    signup = (res) => {
        this.props.signup(res.w3.ig, res.w3.U3);
        debugger
    };

    logout = () => {
        this.props.logout();
    };

    responseGoogle = (res) => {
        this.signup(res, 'google');
    };

    render() {
        const {name} = this.props;
        return (
            <div>
                {!name ?

                    <GoogleLogin className="dd"
                                 clientId="591302227283-caskmsl98uhvlqdhjr86g3ch1vk7k2jc.apps.googleusercontent.com"
                                 render={renderProps => (
                                     <Button variant="contained" color="secondary" onClick={renderProps.onClick}>Sign
                                         in</Button>
                                 )}
                                 buttonText='Sign in'
                                 onSuccess={this.responseGoogle}
                                 onFailure={this.responseGoogle}
                    />

                    : <div>
                        <Button onClick={this.logout} variant="contained" color="primary">Logout
                        </Button>
                        <h2>Welcome {name}</h2>
                    </div>
                }
            </div>

        )
    }
}

const mapStateToProps = store => ({
    name: store.auth.name,
    email: store.auth.email
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction()),
    signup: (email, name) => dispatch(signupAction(email, name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginGoogle);
