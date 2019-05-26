import React, {Component} from 'react';
import ListItemStyle from './ListItem.css'


import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';

import IronImage from './LazyImage';

class ListItem extends Component {
    constructor(props) {
        super(props);
        //this.props.requestApiData(endpoints.HERO_PIC_URI(1));
        this.state = {
            id: props.id,
            title: props.title,
            content: props.content,
            callback: props.callback
        }
        this.callback = this.callback.bind(this);
    }

    callback() {
        console.log(this.state.content)
        this.state.callback(this.state.id);        
    }

    render() {
         return ( 
            <div id='item'>
                <p>{this.state.id}</p>
                <p>{this.state.title}</p>
                <IronImage srcPreload={this.state.content} srcLoaded={this.state.content} alt={this.state.title} ></IronImage>
                <br/>
                <button onClick={this.callback}>Mais</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,//O nome do reducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);