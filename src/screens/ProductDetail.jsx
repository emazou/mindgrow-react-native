import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductMutation } from "../features/productsAPI";
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

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
        width: width,
        height: height,
        marginVertical: 30,
        

      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignContent: "center",
      }}
      decelerationRate={0}
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
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
          borderRadius: 30,
        }}
      >
        {/* Image */}
        <Image
          source={{ uri: pDetail?.photo }}
          style={{
            width: 340,
            height: 340,
            resizeMode: 'cover',
            borderRadius: 30,
          }}
        />
        {/* category */}
        <Text
          style={{
            fontSize: 15,
            color: "black",
            padding: "2%",
          }}
        >
          {pDetail?.category}
        </Text>


        {/* Name  */}
        <Text
          style={{
            fontSize: 25,
            color: "#77628C",
            padding: "2%",
            textAlign: 'center'
          }}
        >
          {pDetail?.name}
        </Text>
        <View
          style={{
            width: '100%',
            height: '15%',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomColor: '#A7D7C5',
            borderBottomWidth: 5
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'baseline',
              textAlign: 'left',
              width: "40%",
              height: "100%"
            }}>

            {/* stock */}
            <Text
              style={{
                fontSize: 13,
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
                color: "#74B49B'",
                padding: "2%",
              }}
            >
              {" "}
              $ {pDetail?.price}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#5C8D89",
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
              }
            }}
          >
            <Text
              style={{
                color: "#F9F8EB",
                fontWeight: "bold",
                padding: "5%",
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#74B49B',
            fontSize: 25,
            textAlign: 'center',
            paddingVertical: 7
          }}
        >Description</Text>
        {/* description */}
        <Text
          style={{
            fontSize: 18,
            color: "black",
            padding: "5%",
            textAlign: "justify",
            backgroundColor: '#A7D7C5',
            margin: 10,
            borderRadius: 15
          }}
        >
          {pDetail?.description}
        </Text>
      </View>
    </ScrollView>
  )
}
