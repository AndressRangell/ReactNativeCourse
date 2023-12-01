import React from 'react'
import { Text } from 'react-native'
import Styles from './Styles'

export default function CustomText({ title, bold, big, small, center, children }) {
  const textStyles = [
    Styles.normal,
    title && Styles.title,
    bold && Styles.bold,
    big && Styles.big,
    small && Styles.small,
    center && Styles.center
  ]
  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}