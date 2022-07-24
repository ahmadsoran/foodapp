
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import linking from './LinkingConf';
import Tabs from './Tabs';
import { Platform, TouchableOpacity } from 'react-native';
import OrderScreen from '../screens/orderScreen/orderScreen';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function NavigationApp() {
    return (
        <NavigationContainer linking={linking}>
            <RootNavigator />
        </NavigationContainer>
    );
}
const Stack = createNativeStackNavigator();
function RootNavigator() {
    const { navigate } = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="OrderScreen" options={{
                orientation: 'portrait',
                presentation: 'card',
                animation: Platform.OS === 'ios' ? 'default' : 'slide_from_bottom',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigate('Cart')}>
                        <Entypo name="shopping-bag" color={'#f5b358'} size={24} />
                    </TouchableOpacity>
                ),


            }} component={OrderScreen} />
        </Stack.Navigator>
    );
}
