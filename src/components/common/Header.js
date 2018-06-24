import React, { Component } from 'react';
import '../../styles/header.css'
import Search from '../Search';
import { connect } from 'react-redux';
import { searchCharacters } from '../../actions/searchItemAction';
class Header extends Component {

    constructor(props){
        super(props)
        this.placeholder = 'Search....';
    }

    searchCharacters = ({ target }) => {
        const { searchCharacters } = this.props;
        const { value } = target;
    
        searchCharacters(value);
      };

    render() {
        const {
            results
          } = this.props;
        return (
            <div className="row pageheader">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <Search
                        placeholder={this.placeholder}
                        searchCharacters={this.searchCharacters}
                        onInput={this.searchCharacters}
                        results={results}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ results, character }) => {
    return {
      results
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      searchCharacters: term => dispatch(searchCharacters(term)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header);  
