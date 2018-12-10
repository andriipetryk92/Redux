import React from 'react';

import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from "../../../../assets/moreHoriz.png";
import LittleButtons from "../../LittleButtons/LittleButtons";

import './FirstForm.css';

class FirstForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFirst: 'New Artboard',

        };
    }

    handleChange = event => {
        this.setState({
            nameFirst: event.target.value
        });
    };

    showLittleButtons = () => {
        this.setState({
            showButtons: true
        });
    };
    closeButtons = () => {
        this.setState({
            showButtons: false
        });
    };
    descriptionSave = () => {
        this.setState({
            isInsertOpened: !this.state.isInsertOpened
        });
    };

    render() {
        const {isDarkTheme} = this.props;
        const {showButtons} = this.state;

        return (
            <div className="firstForm">
                <Paper className={`firstPaper ${isDarkTheme ? 'lighterGrey' : ''}`}>
                    <div className="firstInput">
                        <FormControl className="nameInput">
                            <InputLabel htmlFor="enterValue">Name</InputLabel>
                            <Input className="enterValue" value={this.state.nameFirst} onChange={this.handleChange}/>
                        </FormControl>
                    </div>
                </Paper>
                <Tooltip title="Insert Section">
                    <IconButton aria-label="Insert Section" className="more_horiz" onClick={this.showLittleButtons}>
                        <img src={MoreHoriz} alt="logo"/>
                    </IconButton>
                </Tooltip>
                {showButtons && <LittleButtons
                    closeButtons={this.closeButtons}
                    descriptionSave={this.descriptionSave}
                    isInsertOpened={this.state.isInsertOpened}
                    signIn={this.signIn}
                    isDarkTheme={this.props.isDarkTheme}
                />}
            </div>
        );
    }
}

export default FirstForm;
