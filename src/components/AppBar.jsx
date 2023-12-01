import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10
  }
})

const AppBarTab = ({ active, to, children }) => {
  return (
    <Link to={to}>
      <Text style={styles.text}>
        {children}
      </Text>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'>Repositories</AppBarTab>
      <AppBarTab active to='/signin'>Sign In</AppBarTab>
    </View>
  )
}

export default AppBar