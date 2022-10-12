import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import api_url from '../../api';
import { useNavigation } from "@react-navigation/native";
import { setBill } from '../features/cartSlice'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ShippingInfo = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [shipping, setShipping] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const navigation = useNavigation('')
    const dispatch = useDispatch()

    const products = useSelector(state => state.cart.productsCart)
    const billSave = () => {

        dispatch(setBill({
            name: name,
            lastName: lastName,
            country: country,
            state: state,
            shipping: shipping,
            mail: mail,
            phone: phone
        }))
        navigation.navigate('PaymentScreen')
    }
    return (
        <ScrollView
            style={{
                width: width,
                height: height,
                padding: 10,
                backgroundColor: '#fff',

            }}
            contentContainerStyle={{
                alignItems: 'center'
            }}>

            <View
                style={{
                    width: '90%',
                    backgroundColor: '#F9F8EB',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                }}
            >

                <View
                    style={{
                        width: '100%',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={styles.text}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChange={setName}
                        keyboardType='text'
                    />
                    <Text
                        style={styles.text}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChange={setLastName}
                        keyboardType='text'
                    />
                    <Text
                        style={styles.text}>Country</Text>
                    <TextInput
                        style={styles.input}
                        value={country}
                        onChange={setCountry}
                        keyboardType='text'
                    />
                    <Text
                        style={styles.text}>State</Text>
                    <TextInput
                        style={styles.input}
                        value={state}
                        onChange={setState}
                        keyboardType='text'
                    />
                    <Text
                        style={styles.text}>Shipping Address</Text>
                    <TextInput
                        style={styles.input}
                        value={shipping}
                        onChange={setShipping}
                        keyboardType='text'
                    />
                    <Text
                        style={styles.text}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChange={setPhone}
                        keyboardType='phone-pad'
                    />
                    <Text
                        style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={mail}
                        onChange={setMail}
                        keyboardType='email-address'
                    />
                </View>



                <TouchableOpacity
                    style={{
                        backgroundColor: "#77628C",
                        width: "50%",
                        alignItems: "center",
                        borderRadius: 30,
                        paddingVertical: 10,
                        justifySelf: 'flex-end',
                        marginVertical: 10,
                    }}
                    onPress={billSave}>
                    <Text
                        style={{
                            color: '#F9F8EB'
                        }}>Proceed to Payment</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "#A7D7C5",
                    width: "90%",
                    alignItems: "center",
                    borderRadius: 30,
                    padding: 5,
                    justifySelf: 'center',
                    margin: 8
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 'bold'
                    }}>Remember you get free shipping if your order is higher than $500</Text>
            </View>
            <View
                style={{
                    backgroundColor: "#F9F8EB",
                    width: "90%",
                    alignItems: "center",
                    borderRadius: 30,
                    padding: 10,
                    justifySelf: 'center',
                    margin: 8
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 'bold'
                    }}>For every $1000 in sales we donate a percentage to this organizations:</Text>

                <Image
                    style={{
                        width: 150,
                        height: 100,
                        margin: 8
                    }}
                    resizeMode='contain'
                    source={{
                        uri: 'https://researchautism.org/wp-content/uploads/2016/06/logo.gif'
                    }} />
                <Image
                    style={{
                        width: 150,
                        height: 100,
                        margin: 8
                    }}
                    resizeMode='contain'
                    source={{
                        uri: 'https://dev.epilepsy.org.hk/wp-content/uploads/2021/01/EFHK-logo.gif'
                    }} />

                <Text
                    style={{
                        textAlign: 'center',
                        width: '90%',
                        fontWeight: 'bold',
                        padding: 8
                    }}>To help funding research</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 13,
        width: '80%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#595959',
        elevation: 13,
    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 10,
        color: '#77628c',
        padding: 5,
    }

})



export default ShippingInfo