import React, {Component} from 'react';
import './ItemPopUp.css'


import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

//import * as endpoints from '../requester/endpoints';

export class ItemPopUp extends Component {
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
         return ( 
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.content}</p>
                    <button onClick={this.props.closePopup}>Voltar</button>
                </div>
             </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,//O nome do reducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopUp);