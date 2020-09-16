import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../store/actions'

const AddMessageComponent = (props) => {
  const { addMessage } = props
  let input

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          addMessage(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

AddMessageComponent.propTypes = {
  addMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  addMessage: (message, author) => {
    dispatch(actions.addMessage(message, author))
  }
})

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent)
