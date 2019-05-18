import React, {Component} from 'react';
import ListItem from './ListItem';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux'

class HeroList extends Component {

    requestHero = () => {
        this.props.getHeroInfo(100);
    }

    render() {
         return (
            <div>
                <ul>
                {
                    this.props.requestData.map(data => (
                        <li key={data.id}>{data.id}</li>
                    ))
                }
                </ul>

                <button onClick={this.requestHero}></button>

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
    requestData: state.requestData,
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);