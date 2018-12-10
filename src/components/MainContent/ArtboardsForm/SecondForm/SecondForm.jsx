import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MoreVert from '../../../../assets/moreVertical.png';
import Photo from '../../../../assets/photo.png';


import './SecondForm.css';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import MoreHoriz from "../../../../assets/moreHoriz.png";
import LittleButtons from "../../LittleButtons/LittleButtons";

class SecondForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameSecond: 'Logos & Images',
            miniMenu: null,
            x: 0,
            y: 0
        };
    }

    _onMouseMove(e) {

        this.setState({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        });
    }

    handleChange = event => {
        this.setState({
            nameSecond: event.target.value
        });
    };
    handleClick = event => {
        this.setState({
            miniMenu: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            miniMenu: null
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
        const {x, y, miniMenu, showButtons} = this.state;
        const open = !!miniMenu;

        return (
            <div className="secondForm">
                <Paper className={`secondPaper ${isDarkTheme ? 'lighterGrey' : ''}`}>
                    <div className="secondInput" ref="elem">
                        <FormControl className="nameInput2" onMouseMove={this._onMouseMove.bind(this)}>
                            <Input className="enterValue2" value={this.state.nameSecond} onChange={this.handleChange}/>
                        </FormControl>
                        <h1>{x}{y}</h1>
                        <IconButton aria-label="Insert Section"
                                    className="more_vert"
                                    onClick={this.handleClick}
                                    aria-owns={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                        >
                            <img src={MoreVert} alt="logo"/>
                        </IconButton>
                        <Menu
                            anchorEl={miniMenu}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Collapse</MenuItem>
                            <MenuItem onClick={this.handleClose}>Remove section</MenuItem>
                        </Menu>
                    </div>
                    <div className="cards">
                        <Card className="cardFirst">
                            <CardContent>
                                <Typography>
                                    New
                                </Typography>
                                <img src={Photo} alt="Photo1"/>
                            </CardContent>
                        </Card>
                        <Card className="cardSecond">
                            <CardContent>
                                <Typography>
                                    YOUR LOGO HERE
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className="cardThird">
                            <CardContent/>
                        </Card>
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

export default SecondForm;
