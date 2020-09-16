import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'

const SidebarComponent = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
)

SidebarComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
});

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent)
