import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setBill } from '../features/cartSlice'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ShippingInfo = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [shipping, setShipping] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const navigation = useNavigation("")
    const dispatch = useDispatch()
    const bill = {
        name: name,
        lastName: lastName,
        country: country,
        state: state,
        shipping: shipping,
        mail: mail,
        phone: phone
    }
    const billSave = () => {
        dispatch(setBill(bill))
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
                        placeholder='Cinthya'
                        onChangeText={setName}
                        keyboardType='text'
                        name='name'
                    />
                    <Text
                        style={styles.text}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        placeholder='Di Risio'
                        onChangeText={setLastName}
                        keyboardType='text'
                        name='lastName'
                    />
                    <Text
                        style={styles.text}>Country</Text>
                    <TextInput
                        style={styles.input}
                        value={country}
                        placeholder='Argentina'
                        onChangeText={setCountry}
                        keyboardType='text'
                        name='country'
                    />
                    <Text
                        style={styles.text}>State</Text>
                    <TextInput
                        style={styles.input}
                        value={state}
                        placeholder='State'
                        onChangeText={setState}
                        keyboardType='text'
                        name='state'
                    />
                    <Text
                        style={styles.text}>Shipping Address</Text>
                    <TextInput
                        style={styles.input}
                        value={shipping}
                        placeholder='CR 55 #54-98'
                        onChangeText={setShipping}
                        keyboardType='text'
                        name='shipping'
                    />
                    <Text
                        style={styles.text}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        placeholder='34523453'
                        onChangeText={setPhone}
                        keyboardType='phone-pad'
                        name='phone'
                    />
                    <Text
                        style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={mail}
                        placeholder='mail@gmail.com'
                        onChangeText={setMail}
                        keyboardType='email-address'
                        name='mail'
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#77628C",
                        width: "50%",
                        alignItems: "center",
                        borderRadius: 30,
                        paddingVertical: 5,
                        justifySelf: 'flex-end',
                        marginVertical: 15
                    }}
                    onPress={billSave}>
                    <Text
                        style={{
                            color: '#F9F8EB',
                            paddingVertical: 5,
                            fontWeight: '500'
                        }}>Proceed to Payment</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "#A7D7C5",
                    width: "90%",
                    alignItems: "center",
                    borderRadius: 30,
                    padding: 15,
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