import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function CreditCard() {
    const [number, setNumber] = useState('---- ---- ---- ----')
    const [name, setName] = useState('Name')
    const [date, setDate] = useState('mm/aa')
    const navigation = useNavigation()
    return (
        <ScrollView
            style={{
                width: width,
                height: height,
                backgroundColor: '#fff',
                padding: 10,
            }}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            decelerationRate={0}>
            <View
                style={{
                    width: '90%',
                    height: 250,
                    backgroundColor: '#74B49B',
                    borderRadius: 20,
                    padding:20,
                    justifyContent: 'space-between',
                    marginBottom: 10
                }}>
                    {/* card */}
                <Text
                style={{
                    fontSize:30,
                    fontWeight:'500',
                    padding:5,
                    color: '#fff'
                }}>MindGrow</Text>
                <View>
                    <Text
                    style={{
                        fontSize:20,
                        padding:5,
                        color: '#fff'
                    }}>{number}</Text>
                </View>
                <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'

                }}
                >
                    <Text
                    style={{
                        fontSize:20,
                        padding:5,
                        color: '#fff'
                    }}>{name}</Text>
                    <Text
                    style={{
                        fontSize:20,
                        padding:5,
                        color: '#fff'
                    }}>{date}</Text>
                </View>
            </View>
            {/* form */}
            <View
                style={{
                    flex:1,
                    width: '90%',
                    backgroundColor: '#F9F8EB',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                }}>
                <Text
                    style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    placeholder='Name'
                />
                <Text
                    style={styles.text}>Card number</Text>
                <TextInput
                    style={styles.input}
                    placeholder='0000 0000 0000'
                    onChangeText={setNumber}
                    maxLength='16'
                />
                <Text
                    style={styles.text}>Expiration date</Text>
                <TextInput
                    style={styles.input}
                    placeholder='mm/aa'
                    onChangeText={setDate}
                    
                />
                <Text
                    style={styles.text}>CVV</Text>
                <TextInput
                    style={styles.input}
                />
                <Text
                    style={styles.text}>NIT</Text>
                <TextInput
                    style={styles.input}
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
                onPress={() => navigation.navigate('PurchaseSummary')}>
                <Text
                style={{
                    color: '#F9F8EB'
                }}>Add card</Text>
            </TouchableOpacity>
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