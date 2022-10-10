import { View, Text } from 'react-native'
import React from 'react'

export default function NotFound() {
  return (
    <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
  }}>
      <Image
      source={{uri: 'https://i.im.ge/2022/10/06/1pjfYM.MindGrow.png'}}
      style={{
        width: 400,
        height: 400,
        resizeMode: 'contain',
        margin: 71
    }}/>
    </View>
  )
}