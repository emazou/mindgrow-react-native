import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const PaymentScreen = () => {
  const navigation = useNavigation('')
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        height: height,
        width: width,
        padding: 25,
      }}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View
        style={{
          flex: 1,
          width: width * .9,
          height: height * .75,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9F8EB',
          borderRadius: 15
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 20,
            color: '#77628C',
          }}>Online Payment</Text>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: '#F9F8EB',
            borderRadius: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 15
          }}
          onPress={() => navigation.navigate('CreditCard')}
        >
          <Image
            source={{
              uri: 'https://i.im.ge/2022/10/13/2OZKqm.credit-card.png'
            }}
            style={{
              width: 30,
              height: 30,
            }} />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 20,
              color: 'black',
              textAlign: 'center'
            }}>Credit Card</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/YTZv5p9/next.png'
            }}
            style={{
              width: 30,
              height: 30,
            }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: '#F9F8EB',
            borderRadius: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 15
          }}>
          <Image
            source={{
              uri: 'https://i.im.ge/2022/10/13/2OZKqm.credit-card.png'
            }}
            style={{
              width: 30,
              height: 30,
            }} />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
            }}>Debit Card</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/YTZv5p9/next.png'
            }}
            style={{
              width: 30,
              height: 30,
            }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: '#F9F8EB',
            borderRadius: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 15
          }}>
          <Image
            source={{
              uri: 'https://i.im.ge/2022/10/13/2OZVtr.money.png'
            }}
            style={{
              width: 30,
              height: 30,
            }} />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 20,
              color: 'black',
              textAlign: 'center'
            }}>Online Transfer</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/YTZv5p9/next.png'
            }}
            style={{
              width: 30,
              height: 30,
            }} />
        </TouchableOpacity>
      </View>
    </ScrollView >
  )
}

export default PaymentScreen