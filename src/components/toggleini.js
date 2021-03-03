// REACTDOCS
// HANDLING EVENTS



import React from 'react';
import {Greeting} from './conditionalrendering';

export class Toggle extends React.Component {
    constructor(props) {//Props auto terkirim karena pakai bind(baca docs)
      super(props);
      this.state = {isToggleOn: true};
      
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn


      }));
      console.log(this.state.isToggleOn)

    }
  
    render() {
      return (
          <>
            <div style={{display:"flex"}}>
                <button onClick={this.handleClick} style={{flexGrow:"1"}}>
                {this.state.isToggleOn ? 'Login' : 'Lougout'}
                </button>
            </div>
            {/* Greeting received "this.state.isToggleOn" from this component */}
            <Greeting isLoggedIn={!this.state.isToggleOn}/>
        </>
      );
    }
  }