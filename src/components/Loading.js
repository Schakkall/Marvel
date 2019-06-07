import React, {Component} from 'react';
import './Loading.css';
import ListItem from './ListItem';
import Icon from './loader.gif';
//import ItemPopUp from './ItemPopUp'

//import {bindActionCreators} from 'redux';
//import * as actions from '../actions/myActions';

//import { connect } from 'react-redux';


export default class Loading extends Component {
    //Just show a loading icon during a certain amount of time
    render() {
        window.scrollTo(0, 0);
        return (
        <div id='loader'>
            <div className='container'>
                <img className='box' src={Icon}></img>
            </div>
        </div>
        )
    }
}