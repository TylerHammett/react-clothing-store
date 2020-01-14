import React, {Component} from 'react';
import MenuItem from '../menuItem/MenuItem.component';
import directorySections from './directory.data';
import './Directory.styles.scss';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: directorySections
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title.toUpperCase()} image={imageUrl} size={size}/>
                ))}
            </div>
        );
    }
}

export default Directory;