import React, { Component } from 'react';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Description = (props) => {
 return (
     <div>
         <p className="App-intro">
             To get started, edit <code>src/RefactorMe.js</code> using best practices and save to reload.
         </p>
         <div onClick={ () => props.onNextButtonClicked() }>
             <button>Next</button>
         </div>
         <br/>
     </div>
 );
};

export default Description;