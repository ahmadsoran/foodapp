import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animate, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Cart from '../components/Cart';
const Tab = createBottomTabNavigator();

export default function Tabs() {
    const rotateY = useSharedValue('0deg');
    const animaterotateY = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: rotateY.value }],
        };
    });
    const rotateY1 = useSharedValue('0deg');
    const animaterotateY1 = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: rotateY1.value }],
        };
    });
    const rotateY2 = useSharedValue('0deg');
    const animaterotateY2 = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: rotateY2.value }],
        };
    });
    const rotateY3 = useSharedValue('0deg');
    const animaterotateY3 = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: rotateY3.value }],
        };
    });
    const rotateAnimationHandler = (deg) => {
        if (deg !== '360deg') {
            return rotateY.value = withTiming(deg, {
                duration: 0
            })
        }
        rotateY.value = withTiming(deg, {
            duration: 880
        });
    }
    const rotateAnimationHandler1 = (deg) => {
        if (deg !== '360deg') {
            return rotateY1.value = withTiming(deg, {
                duration: 0
            })
        }
        rotateY1.value = withTiming(deg, {
            duration: 880
        });
    }
    const rotateAnimationHandler2 = (deg) => {
        if (deg !== '360deg') {
            return rotateY2.value = withTiming(deg, {
                duration: 0
            })
        }
        rotateY2.value = withTiming(deg, {
            duration: 880
        });
    }
    const rotateAnimationHandler3 = (deg) => {
        if (deg !== '360deg') {
            return rotateY3.value = withTiming(deg, {
                duration: 0
            })
        }
        rotateY3.value = withTiming(deg, {
            duration: 880
        });
    }

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarIconStyle: styles.tabBarIconStyle,
                tabBarInactiveTintColor: '#0000006b',
                tabBarActiveTintColor: '#f5b358',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTitleContainerStyle: styles.headerTitleContainerStyle,

                headerLeft: () => (
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="menu" size={34} color="black" />
                    </TouchableOpacity>
                ),
                headerLeftContainerStyle: styles.headerLeftContainerStyle,
                headerRight: () => (
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="bell-badge-outline" size={34} color="black" />
                    </TouchableOpacity>
                ),
                headerRightContainerStyle: styles.headerRightContainerStyle,

            }}
        >
            <Tab.Screen options={{
                headerTitle: '126-6 badinan address',
                headerTitleAlign: 'center',


                tabBarIcon: ({ color }) => (
                    <Animate.View style={animaterotateY}>
                        <AntDesign name="home" color={color} size={34} />
                    </Animate.View>
                ),
            }}
                name="Home"
                component={Home}
                listeners={{
                    focus: () => rotateAnimationHandler('360deg'),
                    blur: () => rotateAnimationHandler('0deg'),
                }}

            />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Animate.View style={animaterotateY1}>
                        <MaterialIcons name="location-searching" color={color} size={34} />
                    </Animate.View>
                ),

            }}
                name="Nearby"
                component={Home}
                listeners={{
                    focus: () => rotateAnimationHandler1('360deg'),
                    blur: () => rotateAnimationHandler1('0deg'),
                }}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Animate.View style={animaterotateY2}>
                        <Entypo name="shopping-bag" color={color} size={34} />
                    </Animate.View>
                ),
                headerTitleAlign: 'center',
                headerTitleContainerStyle: {
                    backgroundColor: 'white',
                },

            }}
                name="Cart"
                component={Cart}
                listeners={{
                    focus: () => rotateAnimationHandler2('360deg'),
                    blur: () => rotateAnimationHandler2('0deg'),
                }}
            />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Animate.View style={animaterotateY3}>
                        <FontAwesome name="user-o" color={color} size={34} />
                    </Animate.View>

                ),

            }}
                name="Account"
                component={Home}
                listeners={{
                    focus: () => rotateAnimationHandler3('360deg'),
                    blur: () => rotateAnimationHandler3('0deg'),
                }}
            />



        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#fff',
    },
    tabBar: {
        position: 'relative',
        height: '12%',
        paddingVertical: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    tabBarIconStyle: {
        position: 'relative',
    },
    headerTitleContainerStyle: {
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 10,
        borderRadius: 1000,
        marginVertical: 5,
        height: '80%'


    },
    headerStyle: {
        height: 100,
    },
    headerTitleStyle: {
        maxWidth: 150,
    },
    headerLeftContainerStyle: {
        paddingLeft: 10,
    },
    headerRightContainerStyle: {
        paddingRight: 10,
    }

})
