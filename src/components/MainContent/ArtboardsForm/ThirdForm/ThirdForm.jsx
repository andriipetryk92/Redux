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
import Link from '../../../../assets/link.png';
import Tooltip from '@material-ui/core/Tooltip';
import MoreHoriz from '../../../../assets/moreHoriz.png';
import LittleButtons from '../../LittleButtons/LittleButtons';

import './ThirdForm.css';


class ThirdForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameThird: 'Links',
            miniMenu: null,
        };
    }

    handleChange = event => {
        this.setState({
            nameThird: event.target.value
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
        const {miniMenu, showButtons} = this.state;
        const open = !!miniMenu;

        return (
            <div className="thirdForm">
                <Paper className={`thirdPaper ${isDarkTheme ? 'lighterGrey' : ''}`}>
                    <div className="thirdInput" ref="elem">
                        <FormControl className="nameInput3">
                            <Input className="enterValue3" value={this.state.nameThird} onChange={this.handleChange}/>
                        </FormControl>
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
                                <img src={Link} alt="Photo1"/>
                            </CardContent>
                        </Card>
                        <Card className="cardSecond">
                            <CardContent>
                                <Typography>
                                    YOUR LINK HERE
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className="cardThird">
                            <CardContent/>
                        </Card>
                        <Card className="cardFourth">
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

export default ThirdForm;
