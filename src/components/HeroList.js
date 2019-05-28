import React, {Component} from 'react';
import './HeroList.css';
import ListItem from './ListItem';
//import ItemPopUp from './ItemPopUp'

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';

class HeroList extends Component {

    constructor(props) {
        super(props);
        this.props.requestApiData(endpoints.ALL_HEROES_URI(10, 0));
          
        this.state = { 
            title: props.data.title,
            content: props.data.data,
            offset: 0,
            stack: [],
            put_item: (item) => (this.state.stack.push(item)),
            pop_item: () => (this.state.stack.pop())
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.loadNewState = this.loadNewState.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    loadNewState(props) {
        this.state = {
            title: props.data.title,
            content: props.data.data
        };
        //TODO: Add the new data to stack
    }

    handleScroll() {
        console.log(window.scrollY);
        // if the page is scrolled down then 
        //      increment the offset of the request
        //      request
        //      put in the stack
        //      increment the height of the page
        //      re-render
    }
    
    itemClick(id) {
        //TODO: Render a Pop-UP for item id
        //   Defines the container
        //   Render inside de container
        //   Make it visible   
        console.log('clicked ' + id);
    }

    render() {
        if (this.props.data.data === undefined) {
            return <div>Loading...</div>
        } else {
            this.loadNewState(this.props);
            //TODO: Apply a map function to stack and produce ListItem list
            return (
                <div key={1}> 
                    <button onClick={() => this.itemClick(10)}>CLICK ME</button>
                    <ListItem id={100400} title="Hello"  content='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' callback={this.itemClick}></ListItem>
                    <ListItem id={100401} title="Hello"  content='https://i1.wp.com/valkirias.com.br/wp-content/uploads/2017/08/valkirias-lana-del-rey-1.png?fit=1080%2C530' callback={this.itemClick}></ListItem>
                </div>  
            )
        }
    }
}

const mapStateToProps = state => {
    return ({
        data: state.data,//O nome do reducer
    })
}

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);