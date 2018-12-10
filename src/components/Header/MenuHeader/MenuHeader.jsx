import React, {PureComponent} from 'react';


import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

import logo from '../../../assets/logo.png';
import google from '../../../assets/google.png';
import toogle from '../../../assets/toogle.png';
import cloud from '../../../assets/cloud.png';
import files from '../../../assets/files.png';

import './MenuHeader.css';

class MenuHeader extends PureComponent {

    render() {
        const {anchorEl, isOpened, toTweeter, handleClose, isDarkTheme} = this.props;
        return (
<div className={`me ${isDarkTheme ? 'lighterGrey' : ''}`}>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={isOpened}
                onClose={handleClose}
            >
                <div className={`menu-items ${isDarkTheme ? 'lighterGrey' : ''}`}>
                    <a className="tweet" href="" onClick={toTweeter}>
                        <span>Tweet @PilcroTech</span>
                    </a>
                    <div className={`menu-info ${isDarkTheme ? 'lighterGrey' : ''}`}>
                        <Typography variant="h5">You are 0% setup</Typography>
                        <Typography>You must sign in to progress</Typography>
                    </div>
                    <MenuItem className="item">
                        <img src={google} alt="google"/>
                        <span>Sign in to Google Drive</span>
                        <Checkbox className="check" value="checkedC"/>
                    </MenuItem>
                    <MenuItem className="item">
                        <img src={logo} alt="logo"/>
                        <span>Create Artboard</span>
                        <Checkbox className="check" value="checkedC"/>
                    </MenuItem>
                    <MenuItem className="item">
                        <img src={toogle} alt="toogle"/>
                        <span>Switch background colour</span>
                        <Checkbox className="check" value="checkedC"/>
                    </MenuItem>
                    <MenuItem className="item">
                        <img src={files} alt="copy"/>
                        <span>lick to copy an asset</span>
                        <Checkbox className="check" value="checkedC"/>
                    </MenuItem>
                    <MenuItem className="item">
                        <img src={cloud} alt="cloud"/>
                        <span>Use the desktop App</span>
                        <Checkbox className="check" value="checkedC"/>
                    </MenuItem>
                </div>
            </Menu>
</div>
        );
    }
}


export default MenuHeader;
