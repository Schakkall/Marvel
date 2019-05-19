import React, {Component} from 'react';
import ListItemm from './ListItem.css'

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content
        }
    }

    render() {
         return ( 
             <p id='item'>{this.state.title}</p>
        )
    }
}

export default ListItem;