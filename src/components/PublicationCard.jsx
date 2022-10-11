import { useNavigation } from '@react-navigation/native'
import { Image, View, Text, TouchableOpacity, Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export default function ProductCard(props) {
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
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
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
            <Text
                style={{
                    padding: "1%",
                    textAlign: 'left',
                    fontSize: 18,
                    color: 'grey'
                }}>
                {props.category}
            </Text>
            <Text style={{
                textAlign: "left",
                fontWeight: 'bold',
                fontSize: 20,
                paddingTop: 10
            }}>
                {props.name}
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
                    onPress={() => navigation.navigate('PublicationDetail', { id: props.id })}
                >
                    <Text
                        style={{
                            color: "#F9F8EB",
                            fontWeight: "bold",
                            padding: "5%",
                        }}
                    >
                        Read More
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

