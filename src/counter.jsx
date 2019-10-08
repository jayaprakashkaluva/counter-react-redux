import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Counter extends React.Component {
    render() {return(
        <div>
            <button onClick={this.props.increment}>Increment</button>
            <button onClick={this.props.decrement}>Decreent</button>
            <span>Count is {this.props.count}</span>
        </div>)
    }
}
Counter.propTypes = {
    count: PropTypes.number.isRequired
}
const mapStateToProps = state => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" })
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)