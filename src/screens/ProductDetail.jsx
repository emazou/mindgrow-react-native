import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductMutation } from "../features/productsAPI";

export default function ProductDetail({ navigation, route }) {
  const [pDetail, setPDetail] = useState({})
  const idProduct = route.params.id;
  const [getProduct] = useGetProductMutation();
  async function getOneProduct() {
    try {
      let res = await getProduct(idProduct)
      if (res.data?.success) {
        setPDetail(res.data.response)
      } else {
        console.log(res.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOneProduct()
  }, [])

  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {/* Start View */}
      <View
        style={{
          width: "90%",
          padding: "2%",
          marginHorizontal: "5%",
          marginVertical: "5%",
          alignItems: "center",
          backgroundColor: "#fff",
          opacity: 0.8,
          borderRadius: 30,
        }}
      >
        {/* Image */}
        <Image
          source={{ uri: pDetail?.photo }}
          style={{
            width: "100%",
            height: "50%"
          }}
        />
        {/* category */}
        <Text
          style={{
            fontSize: 20,
            color: "black",
            padding: "2%",
          }}
        >
          {pDetail?.category}
        </Text>


        {/* Name  */}
        <Text
          style={{
            fontSize: 30,
            color: "#77628C",
            padding: "2%",
          }}
        >
          {pDetail?.name}
        </Text>

        {/* description */}
        <Text
          style={{
            fontSize: 20,
            color: "black",
            padding: "5%",
            textAlign: "justify",
            backgroundColor: '#A7D7C5',
            margin: 10
          }}
        >
          {pDetail?.description}
        </Text>
        {/* stock */}
        <Text
          style={{
            fontSize: 15,
            color: "#A7D7C5'",
            padding: "2%",
          }}
        >
          {" "}
          Stock: {pDetail?.stock}
        </Text>
        {/* price */}
        <Text
          style={{
            fontSize: 25,
            color: "#A7D7C5'",
            padding: "2%",
          }}
        >
          {" "}
          $ {pDetail?.price}
        </Text>
        <View
          style={{
            width: '100%',
            height: '15%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "indigo",
              width: "40%",
              alignItems: "center",
              borderRadius: 30,
              marginBottom: 15,
            }}
            onPress={() => navigation.navigate('Shop')}
          >
            <Text
              style={{
                color: "#d3d3d3",
                fontWeight: "bold",
                padding: "5%",
              }}
            >
              Go back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "indigo",
              width: "40%",
              alignItems: "center",
              borderRadius: 30,
              marginBottom: 15,
            }}
            onPress={() => {
              if (user) {
                  dispatch(addProduct({
                          id: props.id,
                          photo: props.photo,
                          name: props.name,
                          price: props.price,
                          stock: props.stock,
                          quantity: 1,
                          }))
                      }}}
          >
            <Text
              style={{
                color: "#d3d3d3",
                fontWeight: "bold",
                padding: "5%",
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
