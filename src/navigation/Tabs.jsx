import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home'
import CartStack from './CartStack'
import Stack from './Stack'
import Drawer from './Drawer'
import { useSelector } from 'react-redux'


export default function Tabs() {
    const quantity = useSelector(state => state.cart.productsCart)
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#5C8D89'
            }}
            initialRouteName='Home'
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="StackShop"
                component={Stack}
                options={{
                    tabBarLabel: 'Shop',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="store" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="CartTab"
                component={CartStack}
                options={{
                    tabBarLabel: 'Cart',
                    headerShown: false,
                    tabBarBadge: quantity.length,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="AccountDrawer"
                component={Drawer}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                    )
                }}

            />
        </Tab.Navigator>
    )
}