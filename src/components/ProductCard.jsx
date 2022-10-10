import { useNavigation } from '@react-navigation/native'
import { Image,View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

const width = Dimensions.get('window').width

export default function ProductCard(props) {
    console.log(props)
    const dispatch = useDispatch();
    const navigation = useNavigation()
    return (
        <View style={{
            width: width*.96,
            padding: "2%",
            backgroundColor: "#F9F8EB",
            borderRadius: 30,
            margin: "2%",
            alignItems: 'center',
        }}
        >
            <Image source={{
                uri: props.photo,
            }}
                style={{
                    width: "100%",
                    height: 250,
                    marginTop: 0,
                    borderRadius: 30,
                }}
                resizeMode="cover"
            />
            <Text style={{
                textAlign: "left",
                fontWeight: 'bold',
                fontSize: 25,
                fontFamily: "sans-serif"
            }}>
                {props.name}
            </Text>
            <Text
                style={{
                    padding: "1%",
                    textAlign: 'left',
                    fontSize: 20,
                }}>
                {props.category}
            </Text>
            <Text
                style={{
                    padding: "1%",
                    textAlign: 'left',
                    fontSize: 20,
                }}>
                ${props.price}
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: "#77628C",
                    width: "70%",
                    alignItems: "center",
                    borderRadius: 30,
                }}
                onPress={() => navigation.navigate('ProductDetail', { id: props.id })}
            >
                <Text
                    style={{
                        color: "#F9F8EB",
                        fontWeight: "bold",
                        padding: "5%",
                    }}
                >
                    View More
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#74B49B',
                    width: "20%",
                    alignItems: "center",
                    borderRadius: 30,
                    margin: 10,
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
                            }}}>
                            <Image
                                source={{ uri: 'https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png' }}
                                style={{
                                    width: 30,
                                    height: 30,
                                }} />
            </TouchableOpacity>
        </View >
    )
}

