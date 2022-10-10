import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../components/Profile'

export default function ProfileScreen({navigation}) {
  return (
      <Profile navigation={navigation}/>
  )
}