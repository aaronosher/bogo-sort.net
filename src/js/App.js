import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Chart from './components/Chart';

class App extends Component {
  render() {
    const { sortData } = this.props;

    return (
      <div className="content">
        <h1>BogoSort.net</h1>
        <p className="description">Watch a bogosort that should take longer than the heat death of the universe in real time.</p>
        <Chart data={sortData} id="chart" height={300} />
      </div>
    )
  }
}

App.propTypes = {
  sortData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => {
  return {
    sortData: state.sort.sortData
  }
};

export default connect(mapStateToProps)(App);
