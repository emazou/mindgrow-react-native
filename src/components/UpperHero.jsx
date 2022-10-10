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
                height: "40%",
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 0
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
                    backgroundColor: "#F9F8EB",
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
                    source={SVGcart}
                    style={{
                        backgroundColor: '#5C8D89',
                        borderRadius: 100,
                    }} />
                    <Text
                    style={{
                        alignSelf: 'center'
                    }}>Shop</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default MindGrow