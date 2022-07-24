import { Ionicons } from '@expo/vector-icons'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyColor from '../assets/styles/color'
import { useNavigation } from '@react-navigation/native'
import RestaurantsList from '../app/RestLIST'
const MyTheme = MyColor()

const TopRestaurants = () => {
    const { navigate } = useNavigation()

    const navigateTOOrderScreen = (id) => {
        navigate('OrderScreen', { restID: id })
    }
    return (
        <View
            style={styles.container}
        >
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerTextLeft}>Top Restaurants</Text>
                <TouchableOpacity activeOpacity={.5}>
                    <Text style={styles.headerTextRight}>View All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'normal'}
                style={styles.scrollContainer}
            >

                {
                    RestaurantsList.RestaurantsList.map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={.8} key={index} onPress={() => navigateTOOrderScreen(item.id)}>
                                <View style={styles.itemContainer}>
                                    <ImageBackground source={item.image} style={styles.image}>
                                        <View style={styles.itemRating}>
                                            <Text style={styles.itemRatingText}>{item.rating}</Text>
                                            <Ionicons name='ios-star' size={20} color={MyTheme.primaryYellow} />
                                        </View>
                                        <View style={styles.imageOverlayRestInfo}>
                                            <View style={styles.itemDiliveryTime}>
                                                <Ionicons name='ios-time' size={20} color='#505050bd' />
                                                <Text style={styles.itemTime}>{item.deliveryTime}</Text>
                                            </View>
                                            <View style={styles.itemRestInfo}>
                                                <Text style={styles.itemText}>{item.name}</Text>
                                                <View style={styles.itemBottomContainer}>
                                                    <Text numberOfLines={1} style={styles.itemFoods}>{item.foods.map(text => { return (text + ' ,') })}</Text>
                                                    <Text style={styles.itemMinOrder}>
                                                        <Ionicons name="md-wallet-outline" size={14} color="#00000086" /> {item.minOrder}</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>

        </View>
    )
}

export default TopRestaurants

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
    },
    headerTextContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    headerTextLeft: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    headerTextRight: {
        fontSize: 15,
        color: MyTheme.textColor,
        opacity: 0.6,
    },
    itemContainer: {
        width: 320,
        height: 200,
        overflow: 'hidden',
        borderRadius: 10,
        elevation: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        marginHorizontal: 10,
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'relative',
        overflow: 'hidden',

    },
    imageOverlayRestInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',

    },
    itemRestInfo: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: MyTheme.textColor,
    },
    itemBottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemFoods: {
        fontSize: 15,
        color: MyTheme.textColor,
        opacity: 0.6,
        width: 100,
    },
    itemDiliveryTime: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffffcc',
        width: '40%',
        alignSelf: 'flex-end',
        marginRight: 0,
        paddingVertical: 5,
        borderTopLeftRadius: 20,
    },
    itemRating: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ffffffff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemRatingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: MyTheme.textColor,
    },
    scrollContainer: {
        padding: 10
    }

})