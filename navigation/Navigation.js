
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import linking from './LinkingConf';
import Tabs from './Tabs';
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OrderScreen from '../screens/orderScreen/orderScreen';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ConfirmOrder from '../screens/confirm-order-screen/ConfirmOrder';
import Maps from '../screens/maps/maps';


export default function NavigationApp() {
    return (
        <NavigationContainer linking={linking}>
            <RootNavigator />
        </NavigationContainer>
    );
}
const Stack = createNativeStackNavigator();
function RootNavigator() {
    const { navigate, goBack } = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="OrderScreen" options={{
                orientation: 'portrait_up',
                presentation: 'card',
                animation: Platform.OS === 'ios' ? 'default' : 'slide_from_bottom',
                title: 'Order Foods',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigate('Cart')}>
                        <Entypo name="shopping-bag" color={'#f5b358'} size={24} />
                    </TouchableOpacity>
                ),


            }} component={OrderScreen} />

            <Stack.Screen name="ConfirmOrderScreen" options={{
                orientation: 'portrait_up',
                animation: 'slide_from_right',
                headerTitleAlign: 'center',

                header: () => (
                    <SafeAreaView>
                        <View style={styles.ConfirmOrderHead}>
                            <TouchableOpacity onPress={() => goBack()}>
                                <Entypo name="arrow-left" color={'#f5b358'} size={24} />
                            </TouchableOpacity>
                            <Text style={styles.ConfirmOrderText}>Confirm Order</Text>
                            <TouchableOpacity onPress={() => navigate('Cart')}>
                                <Entypo name="shopping-bag" color={'#f5b358'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>

                )


            }} component={ConfirmOrder} />
            <Stack.Screen name="Maps" options={{
                orientation: 'portrait_up',
                animation: 'slide_from_right',
                headerTitleAlign: 'center',
                title: 'Track Order',


            }} component={Maps} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ConfirmOrderHead: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: Platform.OS === 'android' ? 20 : 0,
    },
    ConfirmOrderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    }
})