import React, { Component } from 'react';

import ProfileList from '../containers/profile-list'
import ProfileDetail from '../containers/profile_detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <ProfileList />
        <ProfileDetail />
      </div>
    );
  }
}
