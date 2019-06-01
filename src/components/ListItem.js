import React, {Component} from 'react';
import './ListItem.css'


import {bindActionCreators} from 'redux';
import * as actions from '../actions/myActions';

import { connect } from 'react-redux';

import * as endpoints from '../requester/endpoints';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ItemPopUp } from './ItemPopUp'

class ListItem extends Component {
    constructor(props) {
        super(props);
        //this.props.requestApiData(endpoints.HERO_PIC_URI(1));
        this.state = {
            id: props.id,
            title: props.title,
            content: props.content,
            callback: props.callback,
            showPopup: false
        }
        this.callback = this.callback.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    callback() {
        this.togglePopup();
        this.state.callback(this.state.id);        
    }

    togglePopup() {
        this.state.showPopup = !this.state.showPopup;
        this.forceUpdate();
    }


    render() {
         const MyImage = ({ alt, src }) => (
            <LazyLoadImage alt={alt} src={src} visibleByDefault={true} width={500} height={300} delayMethod="debounce" delayTime={3000} />
         );
         
         return ( 
            <div id='item' className='card'>
                {MyImage({
                    alt: 'Legenda ' + this.state.title, 
                    src: this.state.content
                })}
                <br/>
                <div className='container'>
                    <p>{this.state.id}</p>
                    <p>{this.state.title}</p>
                    <button onClick={this.callback}>Mais</button>
                    {this.state.showPopup ? 
                        <ItemPopUp
                            title={this.state.title}
                            content={this.state.title}
                            closePopup={this.togglePopup}
                        />
                    : 
                        <div/>
                    }
                </div>
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