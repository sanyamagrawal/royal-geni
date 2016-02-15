import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../../redux/modules/counter';
import DuckImage from './Duck.jpg';
import './HomeView.scss';
import { VendorData, VendorSelect } from 'components';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  onClick = () => {
      this.props.increment(1);
  }

  render() {
    return (
      <div className="container">
      <h1>Royal Geni </h1>
      <h1>Select Vendor </h1>
      <VendorSelect placeholder="Select a Vendor"/>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <VendorData />
            <img className="duck"
              src={DuckImage}
              alt="This is a duck, because Redux."
            />
          </div>
        </div>
        <h1>Welcome Sanyam, to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:
          {' '}
          <span className="counter--green">{this.props.counter}</span>
        </h2>
        <button className="btn btn-default" onClick={this.onClick}>
          Increment
        </button>
        {' '}
        <button className="btn btn-default" onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to="/404">Go to 404 Page</Link>
      </div>
  );
  }
}

export default connect(mapStateToProps, counterActions)(HomeView);
