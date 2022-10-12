import { Text, View, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import SVGcart from '../../assets/cart.png'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



const MindGrow = () => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                width: "100%",
                height: "45%",
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <View>
            <Image
            source={{ uri: 'https://i.im.ge/2022/10/11/2MGyJM.2MBnpY-MobileTitle.png' }}
            style={{
                width: 300,
                height: 200,
                resizeMode: 'contain',
                padding:5,
            }}
            />
            </View>

            <View
                style={{
                    width: "60%",
                    height: "70%",
                    backgroundColor: "#5C8D89",
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                <Pressable 
                onPress={() => navigation.navigate('Shop')}
                style={{
                    padding:5
                }}>
                    <Image 
                    source={{uri:'https://i.im.ge/2022/10/13/2OGoOp.shopping-cart.png'}}
                    style={{
                        width:50,
                        height:50,
                        padding:10
                    }} />
                    <Text
                    style={{
                        alignSelf: 'center',
                        color:'#A7D7C5',
                        fontWeight:'bold',
                        padding:10
                    }}>Shop</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default MindGrow