import React from "react"
import { Provider } from "react-redux"

import "./App.css"
import { Sidebar } from "./components/Sidebar"
import { MessagesList } from "./components/MessagesList"
import { AddMessage } from "./components/AddMessage"
import { store } from './store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    </Provider>
  )
}
