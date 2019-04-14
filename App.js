import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/addentry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/history'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <History />
        </View>
      </Provider>
    )
  }
}