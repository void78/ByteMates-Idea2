import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={this.isPathActive('/home/documents') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Documents<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/home/documents/upload') ? 'active' : null}>
                  <Link to="/home/documents/upload">Upload Documents</Link>
                </li>
                <li className={this.isPathActive('/home/documents/completed') ? 'active' : null}>
                  <Link to="/home/documents/view">View Documents</Link>
                </li>
                <li className={this.isPathActive('/home/documents/completed') ? 'active' : null}>
                  <Link to="/home/documents/sign">Sign Documents</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);