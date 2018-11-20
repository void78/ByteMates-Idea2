import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Nav from './Nav';

class SideBar extends Component {

  state = {};

  render() {
    let {
      backgroundColor,
    } = this.props;

    return (
      <div className="sidebar" data-color={backgroundColor} >
        <div className="brand">
          <h3>Credit Suisse</h3>
        </div>
        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backgroundColor: state.ThemeOptions.backgroundColor,
});

export default withRouter(
  connect(mapStateToProps)(SideBar)
);