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
        this.mountItem = this.mountItem.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    loadNewState(props) {
        this.setState({
            title: props.data.title,
            content: props.data.data
        });
        //TODO: Add the new data to stack
    }

    handleScroll() { 
        if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
            console.log('The page is scrolled down')
            this.state.offset += 10;
            this.props.requestApiData(endpoints.ALL_HEROES_URI(10, this.state.offset));
            this.loadNewState(this.props);
            //      increment the height of the page
            this.render();
        }
    }
    
    itemClick(id) {
        //TODO: Render a Pop-UP for item id
        //   Defines the container
        //   Render inside de container
        //   Make it visible   
        console.log('clicked ' + id);
    }

    mountItem(key, item) {
        console.log(item);
        return (<div key={key}>{item}</div>)//(<ListItem id={id} title={title}  content={content} callback={this.itemClick}></ListItem>)
    }

    render() {
        var index = 1;

        if (this.props.data.data === undefined) {
            return <div>Loading...</div>
        } else {            
            return (
                <div key={1}>
                    {this.state.stack.map((item) => this.mountItem(index++, item))}
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