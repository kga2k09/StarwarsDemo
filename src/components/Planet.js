import React, { Component } from 'react';
import { getAllPlanets } from '../services/api';
import Residents from './Residents';
import { Redirect, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {loadplanetdata} from '../actions';
class Planet extends Component {
    constructor(props) {
        super();
        this.state = {
            planetList: []
        }
        this.showDetail = this.showDetail.bind(this);
        //get All planet
        
        this.getPlanetList();
    }

    componentDidMount(){
        this.props.loadplanetdata();
    }

    /**Call action dispatcher and show resident list*/
    showDetail = (param, e) => {
        console.log('click',param)

    }
    // showDetail(param, e) {
    //     console.log('Parameter', param);
    //     console.log('Event', e);
    //   }

    getPlanetList = () => {
        getAllPlanets()
            .then(res => {
                let respData = [];
                for (var data of res.results) {
                    respData.push(data);
                }
                this.setState({
                    planetList: respData
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { navigation } = this.props;
        console.log('navigat', navigation)
        console.log(this.props.planetList);
        return (

            <div className="row no-margin">
                {
                    this.state.planetList.map((planet, i) =>

                        <div key={i}
                            className="col-4"
                            style={{ border: '1px solid #c1c4c6', marginBottom: '5px', textAlign: 'center', wordWrap: 'break-word' }}
                            onClick={this.showDetail.bind(this, planet)}
                       >
                            <Link to='/details/' style={{ color: '#000' }} >
                                <p> <span>Name:  </span>{planet.name} </p>
                                <p> <span>Population:  </span>{planet.population} </p>
                                <p> <span>Diameter:  </span>{planet.diameter} </p>
                                <p> <span>Climate:  </span>{planet.climate} </p>
                                {/*  
                                    <Residents
                                        resid={planet.residents}
                                    />
                               */}

                            </Link>
                        </div>

                    )
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    //console.log('mapstatetoprops',state.totalCartItems)
    return{
       // planetList: state.planetList
    }
    
    };

export default connect( mapStateToProps,{loadplanetdata})(Planet);