/* eslint-disable */
import React, { Component } from 'react';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Challenge extends Component {
  render() {
    return(
      <div className="body-challenge">
        <h1 className="title-challenge">Elevator puzzle</h1>
        <p className="challenge-description text-justify">
          <div className="row">
            <div className="col-md-6 description-paragraph">
              There is a elevator in a building with M floors.
              This elevator can take a max of X people at a time or max of total weight Y.
              Given that a set of people has arrived and their weight and the floor they need to
              stop given how many stops has the elevator taken to serve all the people.
              Consider elevator serves in the first come first serve basis.
            </div>
            <div className="col-md-6 example-paragraph">
              Example:<br/>
              Let Array A be the weight of people to be considered A[] = {60, 80, 40 }.<br/>
              Let Array B be the floors where person needs to be dropped respectively B[] = {2, 3, 5}.<br/>
              Total building floors be 5, max allowed person in elevator be 2 at a time with max weight capacity being 200.
              For this example, the elevator would take total of 5 stops floors ground, 2, 3, ground, 5, ground.<br/>
            </div>
          </div>
        </p>
      </div>
    )
  }
}

export default Challenge;
