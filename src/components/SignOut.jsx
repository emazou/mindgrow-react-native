import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import AsyncStorage from '@react-native-async-storage/async-storage'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
import { useSignOutMutation } from '../features/userAPI'
import { useNavigation } from "@react-navigation/native";
import { deleteUser } from '../features/loggedSlice'
import {clear} from '../features/cartSlice'
const SignOutScreen = () => {
    const user = useSelector((state) => state.logged.user)
    const dispatch = useDispatch()
    const [signOut] = useSignOutMutation()
    const navigation = useNavigation()
    const signOutUser = () => {
        let id = user?.id
        signOut(id)
            .then(response => {
                if (response.data.success) {
                    dispatch(deleteUser())
                    dispatch(clear())
                    navigation.navigate("Login")
                } else {
                    console.log(response.error)
                }
            })
            .catch(error => console.log(error))
    }

    return (

        <View style={styles.container}>
            <Text style={styles.textMessage}>
                Are you sure you are logged out?
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={signOutUser}
            >
                <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignOutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        paddingTop: 10,
        backgroundColor: '#fff'
    },
    textMessage: {
        color: '#3f3d56',
        fontSize: 18,
        fontWeight: '500'
    }
    ,
    button: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#77628C',
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderRadius: 7,
    },
    text: {
        color: '#F9F8EB',
        fontSize: 18,
        fontWeight: '500'
    }
})