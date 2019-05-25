import React, {Component} from 'react';
import ListItem from './ListItem';
import ItemPopUp from './ItemPopUp'
import ReactDOM from 'react-dom';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';

class HeroList extends Component {

    constructor(props) {
        super(props);
        //this.props.requestApiData(endpoints.ALL_HEROES_URI(10,0));
        this.state = { 
            title: props.data.title,
            content: props.data
        }
    }

    //Adicionar listener

    itemClick(id) {
        console.log('clicked '+id);
    }

    //TOOD: Apply a map function to result to simplify the sentence
    render() {
        this.itemClick(11);

        if (this.state.content.length > 0)
            console.log(this.state.content);

        return (
            <div key={1}>
                <button onClick={() => this.itemClick(10)}>CLICK ME</button>
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