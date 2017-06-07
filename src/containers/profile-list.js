import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectProfile } from '../actions/index'
import { bindActionCreators } from 'redux'

class ProfileList extends Component {
  renderList() {
    return this.props.profiles.map((profile) => {
      return (
        <li
          key={profile.name}
          onClick={() => this.props.selectProfile(profile)}
          className="list-group-item">
          {profile.name}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    profiles: state.profiles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProfile: selectProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList)
