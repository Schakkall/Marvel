import React, {Component} from 'react';
import ListItemm from './ListItem.css'


import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.props.requestApiData(endpoints.HERO_PIC_URI(1));
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

const mapStateToProps = state => ({
    data: state.data,//O nome do reducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);