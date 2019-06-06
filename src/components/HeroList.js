import React, {Component} from 'react';
import './HeroList.css';
import ListItem from './ListItem';
//import ItemPopUp from './ItemPopUp'

import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';


import Loading from './Loading';

class HeroList extends Component {

    constructor(props) {
        super(props);
          
        this.state = { 
            title: undefined,
            content: undefined,

            offset: 0,

            stack: [],
            put_item: (item) => (this.state.stack.push(item)),
            pop_item: () => (this.state.stack.pop())
        }

        this.handleOnLoad = this.handleOnLoad.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.loadNewState = this.loadNewState.bind(this);
        this.mountItem = this.mountItem.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleOnLoad);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleOnLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }

    
    handleOnLoad(props) {
        this.props.requestApiData(endpoints.ALL_HEROES_URI(10, 0));
        setTimeout(() => this.loadNewState(this.props), 3000);//OnPageLoad
        this.forceUpdate();
    }

    loadNewState(props) {
        if (props.data.status === 200) {
            props.data.data.data.results.forEach(function(element) {
                this.state.stack.push(element);
            }, this);
            this.forceUpdate();
        } else {
            console.log('Falha na requisição!')
        }
    }

    handleScroll() { 
        if (window.pageYOffset + window.innerHeight === document.body.scrollHeight) {
            //console.log('The page is scrolled down')
            this.state.offset += 10;
            this.props.requestApiData(endpoints.ALL_HEROES_URI(10, this.state.offset));
            setTimeout(() => this.loadNewState(this.props), 3000);
            //Increment the height of the page
            this.forceUpdate();
        }
    }
    
    itemClick(id) {
        //The child id is being showed!
        console.log('clicked ' + id);
    }

    mountItem(key, item) {
        return (<ListItem key={key} id={item.id} title={item.name} content={item.thumbnail.path +'.'+ item.thumbnail.extension} callback={this.itemClick}></ListItem>)
    }

    render() {
        let index = 1;
        if (this.props.data.data === undefined) {
            return (<Loading></Loading>)
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