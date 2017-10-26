import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Challenge from './RefactorMeComponents/Challenge'
import Description from './RefactorMeComponents/Description'

class RefactorMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
  }

  render() {
    return (
      <div>
        { this.state.showComponent ? <Challenge /> : <Description onNextButtonClicked={() => this.setState({showComponent: true})}/> }
        <Link to='/puzzle'><button>Start Puzzle</button></Link>
      </div>
     );
  }
}

export default RefactorMe;


