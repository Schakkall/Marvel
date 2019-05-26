import React, {Component} from 'react';
import ListItemStyle from './ListItem.css'


import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';

import { LazyLoadImage } from 'react-lazy-load-image-component';

class ListItem extends Component {
    constructor(props) {
        super(props);
        //this.props.requestApiData(endpoints.HERO_PIC_URI(1));
        this.state = {
            id: props.id,
            title: props.title,
            content: props.content,
            callback: props.callback
        }
        this.callback = this.callback.bind(this);
    }

    callback() {
        console.log(this.state.content)
        this.state.callback(this.state.id);        
    }

    render() {
         const MyImage = ({ alt, src }) => (
            <LazyLoadImage alt={alt} src={src} visibleByDefault={true} width={500} height={300} delayMethod="debounce" delayTime={3000} />
         );
         
         return ( 
            <div id='item'>
                <p>{this.state.id}</p>
                <p>{this.state.title}</p>
                {MyImage({
                    alt: 'Legenda ' + this.state.title, 
                    src: this.state.content
                })}
                <br/>
                <button onClick={this.callback}>Mais</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,//O nome do reducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);