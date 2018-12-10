import React, {PureComponent} from 'react';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Close from "../../../assets/close.png";
import Photo from "../../../assets/photo.png";
import Links from "../../../assets/link.png";
import Colours from "../../../assets/colour.png";
import Fonts from "../../../assets/font.png";
import Snippets from "../../../assets/snippets.png";
import Videos from "../../../assets/video.png";
import AboutArtboard from "../AboutArtboard/AboutArtboard";

import './LittleButtons.css';

class LittleButtons extends PureComponent {
    render() {
        const {descriptionSave, isInsertOpened, signIn, closeButtons, isDarkTheme} = this.props;
        const arr = [
            {
                title: 'Close',
                className: 'insertImages green',
                onClick: closeButtons,
                src: Close,
                alt: 'photo'
            },
            {
                title: 'Images',
                className: 'insertImages',
                onClick: descriptionSave,
                src: Photo,
                alt: 'photo'
            },
            {
                title: 'Links',
                className: 'insertImages',
                onClick: descriptionSave,
                src: Links,
                alt: 'links'
            },
            {
                title: 'Colours',
                className: 'insertImages',
                onClick: descriptionSave,
                src: Colours,
                alt: 'Colours'
            },
            {
                title: 'Fonts',
                className: 'insertImages',
                onClick: descriptionSave,
                src: Fonts,
                alt: 'Fonts'
            },
            {
                title: 'Snippets',
                className: 'insertImages',
                onClick: descriptionSave,
                src: Snippets,
                alt: 'Snippets'
            },
            {
                title: 'Videos',
                className: 'insertImages',
                onClick: descriptionSave,
                src: Videos,
                alt: 'Videos'
            }
        ];

        return (
            <div className={`allInsertImages ${isDarkTheme ? '' : ''}`}>
                {arr.map(({title, className, onClick, src, alt}) => (
                    <Tooltip title={title}>
                        <IconButton aria-label="Insert Section" className={className} onClick={onClick}>
                            <img src={src} alt={alt}/>
                        </IconButton>
                    </Tooltip>
                ))}

                <AboutArtboard
                    opened={isInsertOpened}
                    signIn={signIn}
                    closeDescriptionSave={descriptionSave}
                    isDarkTheme = {this.props.isDarkTheme}
                />
            </div>
        )
    }
}

export default LittleButtons;
