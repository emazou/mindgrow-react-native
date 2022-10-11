import { View, Text, ScrollView, Image, Button, Alert, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSignOutMutation } from '../features/userAPI'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


export default function Profile({ navigation }) {

    const userLogged = useSelector((state) => state.logged.user)
    const dispatch = useDispatch()
    const [token, setToken]= useState('')
    const [userRender, setUserRender] = useState(null)
    const [myUser, setMyUser] = useState([])
    const [signOutUser] = useSignOutMutation()
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                setToken(value)
            }
        } catch (e) {
            console.log(e)

        }
    }
    useEffect(()=>{
        getData()
    },[])


    




    function getMyData() {
        AsyncStorage.getItem('token')
            .then((value) => {
                if (value !== null) {
                    // value previously stored
                    setUserRender(JSON.parse(value))
                    setMyUser(userLogged)


                } else {


                }

                setMyUser(userLogged)
            }).catch((error) => {
                console.log(error)
                AsyncStorage.clear()
            }
            )
    }




    async function handleClear() {

        signOutUser(userMail)
            .then((res) => {
                if (res.error) {
                    let dataError = res.error;
                    let dataMessage = dataError.data;
                    Alert.alert(dataMessage)

                } else {
                    let dataResponse = res.data;
                    let dataSuccess = dataResponse.message;
                    Alert.alert(dataSuccess)

                    AsyncStorage.clear()

                    dispatch(setUserLogout())

                    setTimeout(() => {
                        navigation.navigate('Home')
                    }, 2000)

                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {

        getMyData()

    }, [userLogged])


    return (


        <ScrollView
            style={{
                backgroundColor: '#fffff',
                height: height,
                width: width,
                padding:10
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
                    width: "90%",
                    backgroundColor: '#A7D7C5',
                    marginBottom: 10,
                    borderRadius: 30,
                    padding: '5%'
                }}>
                <Image
                    style={{
                        height: 300,
                        width: 300,
                        padding: '5%',
                        borderRadius: 150,
                        resizeMode: 'cover'
                    }} source={{ uri: userLogged.photo }} />
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold'

                    }}> {userLogged.name} {userLogged.lastName} </Text>
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                    }}> {userLogged.mail} </Text>
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                    }}> {userLogged.country} </Text>
                <Text
                    style={{
                        paddingVertical: "1%",
                        fontSize: 20,
                        color: 'black',
                    }}> {userLogged.role} </Text>
            </View>
        </ScrollView>
    )
}