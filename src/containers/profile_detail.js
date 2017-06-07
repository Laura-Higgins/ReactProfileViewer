import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileDetail extends Component {
  render() {
    if(!this.props.profile) {
      return <div>Select a profile to view!</div>
    }
    return (
      <div>
        <h3>{this.props.profile.name} </h3>
        <div>Age: {this.props.profile.age} </div>
        <div>Bio: {this.props.profile.bio}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.activeProfile
  }
}

export default connect(mapStateToProps)(ProfileDetail)
