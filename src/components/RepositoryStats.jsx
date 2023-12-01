import React from 'react'
import { View } from 'react-native'
import CustomText from '../utils/CustomText'
import Styles from '../utils/Styles'

const parseThousand = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = props => {
  return (
    <View style={Styles.stats}>
      <View>
        <CustomText small center>{parseThousand(props.stargazerCount)}</CustomText>
        <CustomText bold small center>Stars</CustomText>
      </View>
      <View>
        <CustomText small center>{parseThousand(props.forkCount)}</CustomText>
        <CustomText bold small center>Forks</CustomText>
      </View>
      <View>
        <CustomText small center>{props.ratingAverage}</CustomText>
        <CustomText bold small center>Rating</CustomText>
      </View>
      <View>
        <CustomText small center>{props.reviewCount}</CustomText>
        <CustomText bold small center>Review</CustomText>
      </View>
    </View>
  )
}

export default RepositoryStats