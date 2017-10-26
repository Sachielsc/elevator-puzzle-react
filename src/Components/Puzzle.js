import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Puzzle extends Component {

  constructor(props) {
    super(props);
    this.state = { showResultButton: false };
  }

  firstValidateInput() {
    this.setState({showResultButton:false}); //hide the result button when data is not validated
    $(".validationInfo").html(""); //clear all alert info
    const regex = new RegExp(' ', 'g');
    let weightString = $('#weight').val().replace(regex, '');
    let floorString = $('#floor').val().replace(regex, '');//validation on the int array

    if (Math.floor(weightString) === Number(weightString) && $.isNumeric(weightString)) {
      if (Math.floor(floorString) === Number(floorString) && $.isNumeric(floorString)) {
        this.secondValidateInput();
      }

      else {
        $("#validationInfoB").html("<b>You must type in an array of integers as a list of floors!</b>");
        return;
      }
    }

    else {
      $("#validationInfoA").html("<b>You must type in an array of integers as a list of weights!</b>");
      return;
    }
  }

  secondValidateInput() {
    let maxFloor = $('#mfloor').val();
    let maxPeople = $('#mpeople').val();
    let maxWeight = $('#mweight').val();

    if (Math.floor(maxFloor) === Number(maxFloor) && $.isNumeric(maxFloor)) {
      if (Math.floor(maxPeople) === Number(maxPeople) && $.isNumeric(maxPeople)) {
        if (Math.floor(maxWeight) === Number(maxWeight) && $.isNumeric(maxWeight)) {
          this.thirdValidateInput();
        }
        else {
          $("#validationInfoY").html("<b>You must type in a integer as the maxium weight!</b>");
          return;
        }
      }
      else {
          $("#validationInfoX").html("<b>You must type in a integer as the maxium people!</b>");
          return;
        }
    }
    else {
      $("#validationInfoM").html("<b>You must type in a integer as the maxium floor!</b>");
      return;
    }
  }

  thirdValidateInput() {
    let weightArray = $('#weight').val().split(' ');
    let floorArray = $('#floor').val().split(' ');
    let actMaxWeight = Math.max.apply(null, weightArray);
    let actMaxFloor = Math.max.apply(null, floorArray);
    if (weightArray.length === floorArray.length) {
      if (actMaxWeight <= $('#mweight').val()) {
        if (actMaxFloor <= $('#mfloor').val()) {
          $("#validationInfoY").html("<b>All data validated. Please click the 'Check the Puzzle Result' button!</b>");
          this.setState({showResultButton:true});
        }
        else {
          $("#validationInfoB").html("<b>There is a guy who wants to go above the building!</b>");
          return;
        }
      }
      else {
        $("#validationInfoA").html("<b>There is a guy whose weight is greater than elevator limit!</b>");
        return;
      }
    }
    else {
      $("#validationInfoB").html("<b>The element number in Array A and B must be the same!</b>");
      return;
    }
  }

  puzzleAlgorithm() {
    const algorithmWeightArray = $('#weight').val().split(' ');
    const algorithmFloorArray = $('#floor').val().split(' ');
    const algorithmMaxPeople = $('#mpeople').val();
    const algorithmMaxWeight = $('#mweight').val();
    let result = 0;

    // for this round, the ith person is about to enter the elevator. Also for this round, there can be j people on the elevator at maximum
    for (let i = 1, j = 1; i <= algorithmFloorArray.length; i = i + j) {
      j = 1;
      Array.prototype.sum = function (){
        let result = 0;
        for(let n = 0; n < this.length; n++) {
          result += parseInt(this[n]);
        }
        return result;
      };
      do {
        j = j + 1;
      }
      while ( j <= algorithmMaxPeople && i + j - 1 <= algorithmFloorArray.length && algorithmWeightArray.slice( i - 1, i + j - 1).sum() <= algorithmMaxWeight);
      j = j - 1;//at this time, the elevator is overloaded. thus one person must get out
      result = result + j + 1;
    }
    $("#result").html("The result is " + result);
  }

  render() {
    return (
      <div>
        <p>Type in required variables:</p>
        <div id="puzzle-app">
          <div>
            <label>Type in Array A (the weight of each passenger, separating by spaces):</label>
            <input type="text" id="weight"/>
            <div className="validationInfo" id="validationInfoA"></div>
          </div>
          <div>
            <label>Type in Array B (the floor to which passenger wishes go, separating by spaces):</label>
            <input type="text" id="floor"/>
            <div className="validationInfo" id="validationInfoB"></div>
          </div>
          <div>
            <label>Type in Num M (the highest floor of this building):</label>
            <input type="text" id="mfloor"/>
            <div className="validationInfo" id="validationInfoM"></div>
          </div>
          <div>
            <label>Type in Num X (the maximum people this elevator can carry):</label>
            <input type="text" id="mpeople"/>
            <div className="validationInfo" id="validationInfoX"></div>
          </div>
          <div>
            <label>Type in Num Y (the maximum weight this elevator can carry):</label>
            <input type="text" id="mweight"/>
            <div className="validationInfo" id="validationInfoY"></div>
          </div>
        </div>
        <Link to='/'><button>Back to puzzle description</button></Link>
        <button onClick={() => this.firstValidateInput()}>Apply your Input</button>
        <div>
          { this.state.showResultButton ? <button id="resultButton" onClick={() => this.puzzleAlgorithm()}>Check the Puzzle Result</button> : null }
        </div>
        <div id="result"></div>
      </div>
     );
  }
}

export default Puzzle;

