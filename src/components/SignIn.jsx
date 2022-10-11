import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch } from "react-redux";
import { useSignInMutation } from '../features/userAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { setUser } from '../features/loggedSlice'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const SignIn = () => {
    const [mail, setMail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation();
    const [signIn] = useSignInMutation();
    const dispatch = useDispatch();
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            console.log(e)
        }
    }
    const sendSignIn = () => {
        signIn({
            mail: mail,
            password: password,
            from: "form",
        })
            .then((response) => {
                dispatch(setUser(response.data.response.user));
                storeData(response.data.response.token)
                navigation.navigate("Home")
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.text}>Mail</Text>
                <TextInput
                    style={styles.input}
                    value={mail}
                    onChangeText={setMail}
                    placeholder="mail@gmail.com"
                    keyboardType='email-address'
                    name='mail'
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Password"
                    keyboardType="text"
                    name='password'
                />
                <TouchableOpacity onPress={sendSignIn}>
                    <View style={styles.button}>
                        <Text style={{ color: '#F9F8EB', fontSize: 20, }}>Sign In</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.text}> Don't have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('signUp')}>

                        <Text style={styles.textFooter}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        lexDirection: 'row',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: '#fff',
        padding: 10,

    },
    containerForm: {
        width: '100%',
        backgroundColor: '#A7D7C5',
        padding: 30,
        shadowColor: '#595959',
        elevation: 13,
        borderRadius: 15

    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
        color: '#77628c'
    },
    input: {
        fontSize: 18,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#595959',
        elevation: 13,
    },
    button: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#77628C',
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderRadius: 7,
    },
    textFooter: {
        marginStart: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5c98ff'
    }

})