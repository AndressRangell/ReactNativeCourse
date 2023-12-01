import React from 'react'
import { View, Text, Image } from 'react-native'
import CustomText from '../utils/CustomText'
import Styles from '../utils/Styles'

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={Styles.avatarImage} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <CustomText title big>{props.fullName}</CustomText>
      <CustomText normal>{props.description}</CustomText>
      <Text style={Styles.label}>{props.language}</Text>
    </View>
  </View>
)

export default RepositoryItemHeader