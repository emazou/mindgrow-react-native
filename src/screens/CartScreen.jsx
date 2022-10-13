import { View, Text, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import CartProduct from '../components/CartProduct'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function CartScreen(props) {
  const user = useSelector(state => state.logged.user)
  const navigation = useNavigation()
  const productsCart = useSelector(state => state.cart.productsCart)
  let array = productsCart.map((item) => item.price * item.quantity);
  let total = array.reduce((item, sum) => sum + item, 0);
  return (
    <View
      style={{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
      }}
      decelerationRate={0}>


      <ScrollView
        style={{
          width: "100%",
          flexGrow: 1
        }}>
        {productsCart.length === 0 ? (
          <View
            style={{
              flex: 1,
              width: width,
              height: height,
              backgroundColor: '#fff',
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                fontSize: 25
              }}
            >Empty cart</Text>
            <Image
              source={{ uri: "https://www.qrcardboard.com/images/cart.gif?v=01" }}
              style={{
                width: 200,
                height: 200
              }}
            />
          </View>
        ) : (
          <View>
            <FlatList
              data={productsCart}
              renderItem={({ item }) =>
                <CartProduct
                  name={item.name}
                  photo={item.photo}
                  price={item.price}
                  quantity={item.quantity}
                  stock={item.stock}
                  id={item._id}
                />
              }
              keyExtractor={(item) => Math.random().toString(12).substring(0)}
              showsVerticalScrollIndicator={false}
              decelerationRate={0}
            />
          </View>
        )}
      </ScrollView>
      {
        (user && productsCart.length > 0) &&
        <View
          style={{
            width: "100%",
            height: height * 0.13,
            padding: 10,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              borderTopWidth: 3,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                marginTop: 10
              }}
            >Total:</Text>
            <Text
              style={{
                marginTop: 10
              }}
            >${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#77628C",
              width: "50%",
              alignItems: "center",
              borderRadius: 30,
              paddingVertical: 5,
              justifySelf: 'flex-end',
              marginBottom: 8
            }}
            onPress={() => navigation.navigate('ShippingInfo')}>
            <Text
              style={{
                color: '#F9F8EB',
                paddingVertical: 5,
                fontWeight: '500'
              }}>Proceed to Shipping</Text>
          </TouchableOpacity>
        </View>
      }
    </View>

  )
}