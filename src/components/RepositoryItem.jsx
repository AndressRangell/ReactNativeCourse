import React from 'react'
import { View } from 'react-native'
import RepositoryStats from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'
import Styles from '../utils/Styles'

const RepositoryItem = (props) => (
  <View key={props.id} style={Styles.container} >
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)

export default RepositoryItem