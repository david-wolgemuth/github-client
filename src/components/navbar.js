import React, { Component } from 'react';
import { connect } from 'react-redux';


class Navbar extends Component
{
render ()
  {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div>GitHub</div>
      </nav>
    )
  }
}

export default connect(null /* mapStateToProps */, null )(Navbar);