import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import { setSearchfield, requestHumans } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchHumans.searchfield,
    humans: state.requestHumans.humans,
    isPending: state.requestHumans.isPending,
    error: state.requestHumans.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestHumans: () => dispatch(requestHumans())
  }
}

class App extends Component {
  
  componentDidMount() {
    this.props.onRequestHumans();
  }


  render() {
    const filtredHumans = this.props.humans.filter(human => {
      return human.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
    })
    return this.props.isPending ? 
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Humans-Friends</h1>
          <SearchBox searchChange={this.props.onSearchChange}/>
          <Scroll>
            <CardList humans={filtredHumans}/>
          </Scroll>
        </div>    
      );  
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);