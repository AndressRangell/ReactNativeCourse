import React from 'react'
import { View, Text } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Redirect, Route, Switch } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Redirect to='/' />
        <Route exact path='/'>
          <RepositoryList />
        </Route>
        <Route exact path='/signin'>
          <Text>Working on it</Text>
        </Route>
      </Switch>
    </View>
  )
}

export default Main