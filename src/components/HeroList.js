import React, {Component} from 'react';
import ListItem from './ListItem';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux'

class HeroList extends Component {

    constructor(props) {
        super(props);
        this.props.requestApiData();
        this.state = { results: [] }
    }

    render() {
        const { results = [] } = this.props.data;
        if (results.length > 0)
            console.log(results);

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