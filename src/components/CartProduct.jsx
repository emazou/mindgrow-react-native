import { Image, View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, deleteProduct } from '../features/cartSlice';
import {reload} from '../features/reLoadSlice'
const width = Dimensions.get('window').width

export default function CartProduct(props) {
    const dispatch = useDispatch();
    return (
        <View style={{
            width: "90%",
            height: 180,
            padding: "2%",
            backgroundColor: "#F9F8EB",
            borderRadius: 30,
            margin: "5%",
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

            flexDirection: 'row'
        }}
        >
            <Image source={{
                uri: props.photo,
            }}
                style={{
                    width: '25%',
                    height: '100%',
                    marginTop: 0,
                    borderRadius: 30,
                    backgroundColor: "#fff"
                }}
                resizeMode="contain"
            />
            <View
                style={{
                    flex: 1,
                    width: "70%",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingVertical: 8,
                    alignItems: "center",
                    justifyContent: 'space-between'
                }}>
                <Text style={{
                    textAlign: "center",
                    fontWeight: 'bold',
                    fontSize: 15,
                    paddingTop: 10
                }}>
                    {props.name}
                </Text>
                <Text
                    style={{
                        paddingTop: 10

                    }}
                >
                    ${(props.price * props.quantity)}
                </Text>
                <View
                    style={{
                        flex: 1,
                        width: "100%",
                        paddingHorizontal: 30,
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: 'space-between'
                    }}>
                </View>
                <View
                    style={{
                        flex: 1,
                        width: "100%",
                        paddingHorizontal: 30,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 20,
                            height: 20,
                            padding: 2,
                        }}
                        onPress={() => {
                            if (props.quantity === 1) {
                                dispatch(deleteProduct(props.id))
                                dispatch(reload())
                            } else {
                                dispatch(decrement(props.id))
                                dispatch(reload())
                            }
                        }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20
                            }}
                            source={{ uri: props.quantity === 1 ? 'https://i.im.ge/2022/10/11/2oRWzP.garbage-can.png' : 'https://i.im.ge/2022/10/11/2oR19m.minus.png' }} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            padding: "1%",
                            textAlign: 'center',
                            fontSize: 20,
                            backgroundColor: '#ffff'
                        }}>
                        {props.quantity}
                    </Text>
                    <TouchableOpacity
                        style={{
                            width: 20,
                            height: 20,
                            padding: 2,
                        }}
                        onPress={() => {
                            if(props.quantity < props.stock){
                                dispatch(increment(props.id))
                                dispatch(reload())
                            }else{
                                Alert.alert("Ups")
                            }
                            }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20
                            }}
                            source={{ uri: 'https://i.im.ge/2022/10/11/2oRTxC.plus.png' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
