import React from 'react';
import {addArtboard} from '../../redux/actions';
import {connect} from 'react-redux';

import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addNewArtBoard = this.addNewArtBoard.bind(this);
    }

    signIn = () => window.open('https://accounts.google.com/signin/oauth?client_id=611046790846-25t9vou8ldh1jp3ug4l46h1be9unjn0j.apps.googleusercontent.com&as=NCEPWoblwTf5l4L4ZJQ_RA&nosignup=1&destination=https://artboard.pilcro.com&approval_state=!ChRWMWl2NXdmanhEa0RlOGMxUzBScRIfdzhxZlVuTjFreEVSOERFdWhZOThQYy1sRTBwVWRSWQ%E2%88%99APNbktkAAAAAW_6SLHCJM3l6NWweP7xZNHgsyYW3TrDk&oauthgdpr=1&xsrfsig=AHgIfE-2RGBmQzLNzByR_pJ3LNWs_9j7AA', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

    addNewArtBoard({name, id}) {
        this.props.addNewArtboard(name, id);
    };

    onThemeChange = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
    };

    render() {
        return ([
            <Header
                addNewArtBoard={this.addNewArtBoard}
                onThemeChange={this.onThemeChange}
                isDarkTheme={this.state.isDarkTheme}
            />,
            <MainContent
                signIn={this.signIn}
                isDarkTheme={this.state.isDarkTheme}
            />
        ])
    }
}

const mapStateToProps = store => ({
    artboards: store.artboards.artboardsArray
});

const mapDispatchToProps = dispatch => ({
    addNewArtboard: (id, name) => dispatch(addArtboard(id, name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
