import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'

import { Message } from "./Message"

const MessagesListComponent = ({ messages }) => (
  <section id="messages-list">
    <ul>
    {messages.map(message => (
      <Message
      key={message.id}
      {...message}
      />
    ))}
    </ul>
  </section>
)

MessagesListComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
});

export const MessagesList = connect(mapStateToProps, mapDispatchToProps)(MessagesListComponent)
