import React, {Component} from 'react';
import ListItem from './ListItem';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';

class HeroList extends Component {

    constructor(props) {
        super(props);
        this.props.requestApiData(endpoints.ALL_HEROES_URI(10,0) );
        this.state = { 
            title: props.title,
            content: props.content
        }
    }

    render() {
        const { results = [] } = this.props.data;
        this.state.results = this.state;
        if (results.length > 0)
            console.log(results);

        return (
            <div>
                <ListItem key='1' title='Herói número 1' ></ListItem>
             
                <ListItem key='2' title='Herói número 2'></ListItem>
             
                <ListItem key='3' title='Herói número 3'></ListItem>
             
                <ListItem key='4' title='Herói número 4'></ListItem>
             
                <ListItem key='5' title='Herói número 5'></ListItem>
             
                <ListItem key='6' title='Herói número 6'></ListItem>
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