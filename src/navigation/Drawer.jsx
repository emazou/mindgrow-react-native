import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileScreen from '../screens/ProfileScreen';
import AuthStack from './AuthStack'
const Drawer = () => {
    const user = useSelector(state => state.logged.user)
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName={user ? "Account" : "Login"}
        >
            {
                user && <Drawer.Screen
                    name="Account"
                    component={ProfileScreen}
                />
            }
            <Drawer.Screen
                name={user?"Sing Out": "Login"}
                component={AuthStack}
                options={{
                    headerShown: user?true:false,
                }}
            />

        </Drawer.Navigator>
    )
}

export default Drawer