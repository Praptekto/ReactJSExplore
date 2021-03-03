import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {//jika props.warn false
      return null;
    }
  
    return (
      <div className="warning">
        {alert("Warning!")}
      </div>
    );
  }
  
  export class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          {/* <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button> */}
        </div>
      );
    }
  }