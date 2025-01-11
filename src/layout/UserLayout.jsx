import React from 'react'
import {Outlet} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store'

function UserLayout() {
  return (
    <div>
      <Provider store={store}>
        <Outlet/>
      </Provider>
    </div>
  )
}

export default UserLayout