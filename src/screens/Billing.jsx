import { ScrollView, TextInput, FlatList,Image, TouchableOpacity, Text, View } from "react-native-gesture-handler";
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import api_url from '../../api';
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Billing() {
    const [token, setToken] = useState('')
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
    useEffect(() => {
        getData()
    }, [])
    const products = useSelector(state => state.cart.productsCart)
    const formBill = useRef()
    const billSave = (e) => {
        e.preventDefault()
        // let formData = new FormData(formBill.current)
        // dispatch(setBill(Object.fromEntries(formData)));
        const payload = {
            items: products.map(p => ({
                id: p.id, quantity: p.quantity,
            })),
        };

        axios.post(`${api_url}/payments`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => {
            if (res.data.success) {
                const mercadopagoLink = res.data.url;
                window.open(mercadopagoLink);
            } else {
                console.error('Unexpected backend response', res.data);
            }
        }).catch(console.error);
    }
    const billArray = [
        { item: "Name", name: "name", type: "text", id: "bill1" },
        { item: "Last Name", name: 'lastName', type: "text", id: "bill2" },
        { item: "Country", name: "country", type: "text", id: "bill3" },
        { item: "State", name: "state", type: "text", id: "bill4" },
        { item: "Shipping Address", name: "shipping", type: "text", id: "bill5" },
        { item: "Phone Number", name: "phone", type: "text", id: "bill6" },
    ];
    return (
        <ScrollView>
            <View
                key={formBill}
                style={{
                    width: '100%',
                    backgroundColor: '#F9F8EB',
                }}>
                <FlatList
                    data={billArray}
                    renderItem={({ item }) =>
                        <>
                            <Text
                                style={{
                                    alignSelf: 'flex-start',
                                    fontSize: 20,
                                    fontWeight: '500',
                                    paddingVertical: 10,
                                    color: '#77628c'
                                }}>{item.item}</Text>
                            <TextInput
                                style={{
                                    fontSize: 18,
                                    width: '100%',
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    shadowColor: '#595959',
                                    elevation: 13,
                                }}
                            />
                        </>}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                    decelerationRate={0}
                />
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
                    onPress={() => navigation.navigate('Billing', { id: props.id })}>
                    <Text
                        style={{
                            color: '#F9F8EB'
                        }}>Proceed to Payment</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "#A7D7C5",
                    width: "100%",
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
                    width: "100%",
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
                    }}>For every $1000 in sales we donate a percentage to this organizations:</Text>
                <View
                    style={{
                        backgroundColor: "#F9F8EB",
                        width: "100%",
                        alignItems: "center",
                        borderRadius: 30,
                        padding: 5,
                        justifyContent: 'space-around',
                        margin: 8,
                        flexDirection: 'row'
                    }}>
                    <Image
                        style={{
                            width: 100,
                            margin: 5
                        }}
                        source={{
                            uri: 'https://researchautism.org/wp-content/uploads/2016/06/logo.gif'
                        }} />
                    <Image
                        style={{
                            width: 100,
                            margin: 5
                        }}
                        source={{
                            uri: 'https://dev.epilepsy.org.hk/wp-content/uploads/2021/01/EFHK-logo.gif'
                        }} />
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 'bold'
                    }}>To help funding research</Text>
            </View>
        </ScrollView>
    )
}