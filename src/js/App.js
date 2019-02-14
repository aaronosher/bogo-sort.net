import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Chart from './components/Chart';

class App extends Component {
  render() {
    const { sortData } = this.props;

    return (
      <div className="content">
        <h1>Rexpack</h1>
        <p className="description">React, Express, and Webpack Boilerplate Application</p>
        <Chart data={sortData} id="chart" width={700} height={300} />
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
