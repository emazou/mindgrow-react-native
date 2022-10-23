import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import ShippingInfo from "../screens/ShippingInfo";
import PaymentScreen from '../screens/PaymentScreen';
import CreditCard from '../screens/CreditCard';
import PurchaseSummary from '../screens/PurchaseSummary'
import SuccessfulPayment from '../screens/SuccessfulPayment'
export default function CartStack() {
    const StackNav = createNativeStackNavigator()
    return (
        <StackNav.Navigator
            initialRouteName='Cart'
        >
            < StackNav.Screen name='Cart' component={CartScreen} options={{ headerBackTitleVisible: false }} />
            <StackNav.Screen name='ShippingInfo' component={ShippingInfo} options={{ title: "Shipping Info", headerBackTitleVisible: false }} />
            <StackNav.Screen name='PaymentScreen' component={PaymentScreen} options={{title: "Payment", headerBackTitleVisible: false }} />
            <StackNav.Screen options={{ title: 'Add card', headerBackTitleVisible: false }} name='CreditCard' component={CreditCard} />
            <StackNav.Screen options={{ title: 'Purchase Summary', headerBackTitleVisible: false }} name='PurchaseSummary' component={PurchaseSummary} />
            <StackNav.Screen options={{ title: 'Purchase completed', headerBackTitleVisible: false, headerBackVisible: false }} name='SuccessfulPayment' component={SuccessfulPayment} />
        </StackNav.Navigator >
    )

}