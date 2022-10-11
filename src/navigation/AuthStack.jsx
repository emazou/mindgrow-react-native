import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignOutScreen from '../screens/SignOutScreen';
import SignUpScreen from '../screens/SignUpScreen'
import { useSelector } from 'react-redux';
const AuthStack = () => {
    const user = useSelector(state => state.logged.user)
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={user ? 'signout' : 'signin'}>
            {
                user ? <Stack.Screen
                    name='signout'
                    component={SignOutScreen}
                    options={{
                        title: 'Sign Out',
                        headerShown: false,
                    }}
                />
                    :
                    <>
                        <Stack.Screen
                            name='signin'
                            component={SignInScreen}
                            options={{
                                title: 'Sign In',
                            }}
                        />
                        <Stack.Screen
                            name='signUp'
                            component={SignUpScreen}
                            options={{
                                title: 'Sign Up',
                            }}
                        />
                        
                    </>
            }


            {/* <Stack.Screen
            name='HomeStak'
            component={Tabs}
            options={{headerShown: false}}
            /> */}

        </Stack.Navigator>
    )
}

export default AuthStack

/* const styles = StyleSheet.create({}) */