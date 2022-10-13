import { View, Text, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { clear } from '../features/cartSlice'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function PurchaseSummary() {
  const navigation = useNavigation()
  const billData = useSelector(state => state.cart.billDetail)
  const cart = useSelector(state => state.cart.productsCart)
  let total = cart.map((item) => item.price * item.quantity).reduce((item, sum) => sum + item, 0)
  const dispatch = useDispatch()
  const payment = () => {
    dispatch(clear())
    navigation.navigate('SuccessfulPayment')
  }
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        height: height,
        width: width,
        padding: 25,
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          height: height * 0.70,
          padding: 10,
          justifyContent: 'space-evenly',

        }}
      >
        <Text
          style={{
            fontSize: 20
          }}>Delivery information</Text>
        <View
          style={{
            backgroundColor: '#a7d7c55f',
            padding: 10,
            borderRadius: 10
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >Address</Text>
          <Text
            style={{
              marginTop: 10
            }}
          >{billData.state}, {billData.shipping}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#a7d7c55f',
            padding: 10,
            borderRadius: 10
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >Phone</Text>
          <Text
            style={{
              marginTop: 10
            }}
          >{billData.phone}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#a7d7c55f',
            padding: 10,
            borderRadius: 10,

          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >Payment method</Text>
          <Image
            source={{
              uri: 'https://i.im.ge/2022/10/13/2OZKqm.credit-card.png'
            }}
            style={{
              width: 30,
              height: 30,
              marginTop: 10
            }} />
          <Text
            style={{
              marginTop: 10
            }}
          >Credit card</Text>
        </View>
        <View>
          <Text
            style={{
              padding: 10,
              fontSize: 16
            }}
          >Your products</Text>
          <FlatList
            horizontal={true}
            data={cart}
            style={{
              backgroundColor: '#a7d7c55f',
              padding: 10,
              borderRadius: 10,
              marginTop: 10
            }}
            renderItem={({ item }) => <Image source={{ uri: item.photo }} style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              backgroundColor: '#fff',
              marginHorizontal: 10
            }} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
            }}
          >Summary</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              backgroundColor: '#a7d7c55f',
              borderRadius: 10,
              paddingVertical: 20,
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >Total</Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >{total.toFixed(2)}</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifySelf: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#77628C",
              width: "50%",
              alignItems: "center",
              borderRadius: 30,
              paddingVertical: 10,
              justifySelf: 'center',
              marginVertical: 10,
            }}
            onPress={payment}>
            <Text
              style={{
                color: '#F9F8EB',
                fontWeight: '500'
              }}>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}