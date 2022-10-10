import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import ProfileScreen from '../screens/ProfileScreen';
const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Account"
        >
            <Drawer.Screen
                name="Account"
                component={ProfileScreen}
                /* options={{
                    headerTintColor: '#3f3d56',
                }} */
            />
        </Drawer.Navigator>
    )
}

export default Drawer