import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetOnePublicationQuery } from "../features/publicationAPI";
import * as Linking from 'expo-linking';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function PublicationDetail({ navigation, route }) {
  const [puDetail, setPuDetail] = useState({})
  const idPublication = route.params.id;
  const [getPublication] = useGetOnePublicationQuery();



  async function getOnePublication() {
    try {
      let res = await getPublication(idPublication)
      if (res.data?.success) {
        setPuDetail(res.data.response)
      } else {
        console.log(res.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOnePublication()
  }, [])

  const handleOpenWithLinking = () =>{
    Linking.openURL({uri: puDetail?.url});

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
          source={{ uri: puDetail?.photo }}
          style={{
            width: 340,
            height: 340,
            resizeMode: 'cover',
            borderRadius: 30,
          }}
        />
        {/* date */}
        <Text
          style={{
            fontSize: 15,
            color: "black",
            padding: "2%",
          }}
        >
          {puDetail?.date}
        </Text>
        {/* category */}
        <Text
          style={{
            fontSize: 15,
            color: "black",
            padding: "2%",
          }}
        >
          {puDetail?.category}
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
          {puDetail?.name}
        </Text>
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
          {puDetail?.description}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#5C8D89",
            width: "40%",
            alignItems: "center",
            borderRadius: 30,
            marginBottom: 15,
          }}
          onPress={() => handleOpenWithLinking()}
        >
          <Link
            style={{
              color: "#F9F8EB",
              fontWeight: "bold",
              padding: "5%",
            }}
          >
            View original Article
          </Link>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}}