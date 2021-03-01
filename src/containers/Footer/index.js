import React, { Component } from 'react';

export default class Footer extends Component {
  currentYear = (new Date()).getFullYear();

  render() {
    return (
      <div className="container" style={{ marginTop: '25px' }}>
        <div className="row">
          <legend />
          <p>
            © Copyright&nbsp;
            {this.currentYear}
            . Some site name. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}
