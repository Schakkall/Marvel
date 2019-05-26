import React, {Component} from 'react';
import ItemPopUpStyle from './ItemPopUp.css'


import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';


class ItemPopUp extends Component {
    constructor(props) {
        super(props);
        //this.props.requestApiData(endpoints.HERO_INFO_URI(1));
        this.state = { 
            key: props.key,
            title: props.title,
            content: props.content
        }
    }

    render() {
         //TODO: Use a Pop-UP component
         return ( 
             <p id='item'>PopUp</p>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,//O nome do reducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopUp);