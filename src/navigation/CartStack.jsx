import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import Billing from "../screens/Billing";


export default function CartStack() {
    const StackNav = createNativeStackNavigator()
    return (
        <StackNav.Navigator
            initialRouteName='Cart'
        >
        < StackNav.Screen name = 'Cart' component = { CartScreen } />
        <StackNav.Screen name='Billing' component={Billing}/>
        </StackNav.Navigator >
    )

}