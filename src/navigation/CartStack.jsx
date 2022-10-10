import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/CartScreen";

export default function CartStack() {
    const StackNav = createNativeStackNavigator()
    return (
        <StackNav.Navigator
            initialRouteName='Cart'
        >
        < StackNav.Screen name = 'Cart' component = { CartScreen } />

        </StackNav.Navigator >
    )

}