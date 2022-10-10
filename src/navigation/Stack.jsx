import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shop from "../screens/Shop";
import ProductDetail from "../screens/ProductDetail";

export default function Stack() {
    const StackNav = createNativeStackNavigator()
    return (
        <StackNav.Navigator
            initialRouteName='Shop'
        >
        <StackNav.Screen name='ProductDetail' component={ProductDetail} />
        < StackNav.Screen name = 'Shop' component = { Shop } />

        </StackNav.Navigator >
    )

}