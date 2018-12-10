import React from 'react';
import FirstForm from './FirstForm/FirstForm';
import './Artboards.css';
import SecondForm from "./SecondForm/SecondForm";
import ThirdForm from "./ThirdForm/ThirdForm";

class ArtboardsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    signIn = () => window.open('https://accounts.google.com/signin/oauth?client_id=611046790846-25t9vou8ldh1jp3ug4l46h1be9unjn0j.apps.googleusercontent.com&as=NCEPWoblwTf5l4L4ZJQ_RA&nosignup=1&destination=https://artboard.pilcro.com&approval_state=!ChRWMWl2NXdmanhEa0RlOGMxUzBScRIfdzhxZlVuTjFreEVSOERFdWhZOThQYy1sRTBwVWRSWQ%E2%88%99APNbktkAAAAAW_6SLHCJM3l6NWweP7xZNHgsyYW3TrDk&oauthgdpr=1&xsrfsig=AHgIfE-2RGBmQzLNzByR_pJ3LNWs_9j7AA', '_blank', 'location=yes, margin= 0 auto, height=570,width=520,scrollbars=yes,status=yes');

    render() {
        const {isDarkTheme} = this.props;
        return (
            <div className={`content ${isDarkTheme ? 'ligtherGrey' : ''}`}>
                <FirstForm
                    isDarkTheme={this.props.isDarkTheme}
                    handleChange={this.props.handleChange}
                    nameFirst={this.state.nameFirst}
                />
                <SecondForm
                    isDarkTheme={this.props.isDarkTheme}
                />
                <ThirdForm
                    isDarkTheme={this.props.isDarkTheme}
                />

            </div>
        );
    }
}

export default ArtboardsForm;
