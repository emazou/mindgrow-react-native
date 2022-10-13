import { useNavigation } from '@react-navigation/native'
import { Image, View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from '../features/cartSlice';
const width = Dimensions.get('window').width

export default function ProductCard(props) {
    const user = useSelector(state => state.logged.user)
    const dispatch = useDispatch();
    const navigation = useNavigation()
    return (
        <View style={{
            width: width * .85,
            padding: "2%",
            backgroundColor: "#F9F8EB",
            borderRadius: 30,
            margin: "2%",
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 10,
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
                    backgroundColor: "#fff"
                }}
                resizeMode="contain"
            />
            <Text style={{
                textAlign: "left",
                fontWeight: 'bold',
                fontSize: 20,
                paddingTop: 10
            }}>
                {props.name}
            </Text>
            <Text
                style={{
                    padding: "1%",
                    textAlign: 'left',
                    fontSize: 18,
                    color: 'grey'
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
                        backgroundColor: "#77628C",
                        width: "50%",
                        alignItems: "center",
                        borderRadius: 30,
                    }}
                    onPress={() => navigation.navigate('Detail', { id: props.id })}
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
                        padding: 4
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
                        } else {
                            Alert.alert("You must register first")
                        }
                    }}>
                    <Image
                        source={{ uri: 'https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png' }}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}

