import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function PurchaseSummary() {
  const navigation = useNavigation()
  return (
    <ScrollView
      style={{
        width: width,
        height: height,
        backgroundColor: '#fff',
        padding: 10,
      }}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      decelerationRate={0}>
      <View
        style={{
          flex: 1,
          width: "90%",
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex:1,
            backgroundColor: "#F9F8EB",
            width: 300,
            height: 300,
            alignItems: "center",
            borderRadius: 30,
            padding: 25,
            justifySelf: 'center',
            margin: 8
          }}>
          <Text
            style={{
              textAlign: 'center',
              width: '100%',
              fontWeight: 'bold',
              padding: 10
            }}>Your purchase has been successful!</Text>
          <Image
            style={{
              width: 100,
              height: 100,
              margin: 8
            }}
            resizeMode='contain'
            source={{
              uri: 'https://i.im.ge/2022/10/13/2OB7TM.fireworks.png'
            }} />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#77628C",
            width: "50%",
            alignItems: "center",
            borderRadius: 30,
            paddingVertical: 5,
            justifySelf: 'flex-end',
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate('Shop')}>
          <Text
            style={{
              color: '#F9F8EB'
            }}>Return to Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}