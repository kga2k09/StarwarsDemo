import React, { Component } from 'react';
import { getDetails } from '../services/api';

class Residents extends Component {
    constructor() {
        super(); 
        this.state = {
            resname:''
        } 
    }

    getPlanetResidents(id){
        getDetails(id)
            .then(res => {
               console.log('people resp:',res)
               if(res){
                this.setState({
                    resname: res.name
                })
               }else{
                this.setState({
                    resname: 'NA'
                })
               }
               
            })
            .catch(err => console.log(err));
    }

    render() {
        const {resid} = this.props;
        this.getPlanetResidents(resid.split('\/')[5]);    
        return (
            <p>{this.state.resname}</p>
        );
    }
}
export default Residents;