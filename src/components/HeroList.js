import React, {Component} from 'react';
import ListItem from './ListItem';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux'

class HeroList extends Component {

    componentDidMount() {
        this.props.requestApiData();
    }


    render() {
         return (
            <div>
                <ListItem title='Herói número 1' ></ListItem>
             
                <ListItem title='Herói número 2'></ListItem>
             
                <ListItem title='Herói número 3'></ListItem>
             
                <ListItem title='Herói número 4'></ListItem>
             
                <ListItem title='Herói número 5'></ListItem>
             
                <ListItem title='Herói número 6'></ListItem>
            </div>  
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,//O nome do reducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);