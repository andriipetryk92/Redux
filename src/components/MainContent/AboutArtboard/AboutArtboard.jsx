import React, {PureComponent} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import descriptionSave from '../../../assets/descriptionSave.png';

import './AboutArtboard.css';

class AboutArtboard extends PureComponent {
    render() {
        const {anchorInsert, signIn, opened, closeDescriptionSave, onHover, isDarkTheme} = this.props;
        return (

            <Dialog
                anchorEl={anchorInsert}
                open={opened}
                onClose={closeDescriptionSave}
            >
                <div className={`${isDarkTheme ? 'lighterGrey' : ''}`}>
                    <div className="descriptionSave">
                        <img src={descriptionSave} onMouseOver={onHover} alt="description"/>
                    </div>
                    <DialogTitle>{"Sign in to Save"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            All Pilcro Artboards are stored on your Google Drive just like your other Docs, Sheets and
                            Slides. This makes it easy for you to share and organise your Artboards.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={signIn} color="secondary" autoFocus>
                            Sign in with google
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        );
    }
}

export default AboutArtboard;