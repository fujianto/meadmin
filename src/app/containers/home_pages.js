import React, { PureComponent } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types'
import Header from 'app/components/header'
import FilterBar from 'app/components/filter_bar'
import PeopleTable from 'app/components/people_table'
import asyncFetch from 'app/helpers/async_fetch';
import { API_URL } from 'app/config';
import styles from './home_page.css';
import { connect } from 'react-redux';
import { getAllPeoples, getAllHomeworlds } from 'app/actions/starwars';

class HomePage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      filter_page: 1,
      peoples: []
    }

    this.fetchPeople = this.fetchPeople.bind(this);
  }
  
  static propTypes = {

  }

  componentDidMount() {
    this.fetchPeople();
    this.fetchHomeworlds();
  }

  async fetchPeople() {
    let res = await asyncFetch(`${API_URL}/people/?page=${ this.state.page }`);
    let peoples = res.results;
    
    peoples === null || typeof peoples === 'undefined' ? '' :  peoples.map(async (person, i) => {
      let homeworld = person.homeworld;
      let res = await asyncFetch(homeworld);
      person.homeworld = res;
    });

    this.props.getAllPeoples(peoples);
    
    this.setState({
      page: this.state.page + 1
    })
  }

  async fetchHomeworlds() {
    let res = await asyncFetch(`${API_URL}/planets/?page=${ this.state.filter_page }`);
    let homeworld = res.results;
    
    if (res.next === null) {
      return;
    } 
    
    this.props.getAllHomeworlds(homeworld);

    this.setState({
      filter_page: this.state.filter_page + 1
    });

    return this.fetchHomeworlds();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <FilterBar homeworlds={this.props.homeworlds} />

        <InfiniteScroll
          pageStart={ this.state.page }
          loadMore={ this.fetchPeople }
          hasMore={true}
          threshold={250}
          initialLoad={false}
          loader={<div className="loader" key={ this.state.page }>Loading ...</div>}
        >
          <PeopleTable peoples={ this.props.peoples }/>
        </InfiniteScroll>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    peoples: state.StarWars.peoples,
    homeworlds: state.StarWars.homeworlds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPeoples: (peoples) => dispatch(getAllPeoples(peoples)),
    getAllHomeworlds: (homeworld) => dispatch(getAllHomeworlds(homeworld))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { HomePage };