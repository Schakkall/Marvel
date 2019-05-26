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
        //this.props.requestApiData(endpoints.ALL_HEROES_URI(10, 0));
        this.state = { 
            title: props.data.title,
            content: props.data,
            stack: [],
            put_item: (item) => (this.state.stack.concat(item)),
            pop_item: (item) => (this.state.stack.pop())
        }
    }

    //TODO: Add listener for the onScroll event of the document
    // if the page is scrolled down then 
    //      increment the offset of the request
    //      request
    //      put in the stack
    //      increment the size of the page
    //      render only the new itens
    
    itemClick(id) {
        //TODO: Render a Pop-UP for item id
        console.log('clicked ' + id);
    }

    //TODO: Apply a map function to stack and produce ListItem list
    render() {
        if (this.state.content.length > 0)
            console.log(this.state.content);

        return (
            <div key={1}> 
                <button onClick={() => this.itemClick(10)}>CLICK ME</button>
                <ListItem id={100400} title="Hello"  content='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' callback={this.itemClick}></ListItem>
                <ListItem id={100402} title="Hello"  content='https://ftopx.com/large/201411/128901.jpg' callback={this.itemClick}></ListItem>
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