import { View, Text, ScrollView, Image, Button, Alert, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSignOutMutation } from '../features/userAPI'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


export default function Profile({ navigation }) {

    const userLogged = useSelector((state) => state.logged.user)
    return (
        <ScrollView
            style={{
                backgroundColor: '#fff',
                height: height,
                width: width,
                padding:25,
            }}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: "100%",
                    height: height*.75 ,
                    backgroundColor: '#A7D7C5',
                    borderRadius: 30,
                }}>
                <Image
                    style={{
                        height: 250,
                        width: 250,
                        padding: '5%',
                        borderRadius: 150,
                        resizeMode: 'cover'
                    }} source={{ uri: userLogged.photo }} />
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold',
                        marginTop: 15

                    }}> {userLogged.name} {userLogged.lastName} </Text>
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                        marginTop: 15
                    }}> {userLogged.mail} </Text>
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                        marginTop: 15
                    }}> {userLogged.country} </Text>
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                        marginTop: 15
                    }}> {userLogged.role} </Text>
            </View>
        </ScrollView>
    )
}