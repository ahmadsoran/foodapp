import { FontAwesome } from '@expo/vector-icons'
import { Image } from '@rneui/themed'
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RestLIST from '../../app/RestLIST'
import DiscountCard from '../../components/DiscountCard'
import Padding from '../../components/Padding'
import SearchInput from '../../components/SearchInput'

const Nearby = ({ navigation }) => {
    const { navigate } = navigation;

    const navigateTOOrderScreen = (id) => {
        navigate('OrderScreen', { restID: id })
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>
                    <DiscountCard />
                    <View style={styles.searchContainer}>
                        <SearchInput name='Search Food and Restaurants' iconLeft='search' iconRight='filter-list' />
                    </View>
                    <View style={styles.itemsContainer}>
                        <Text style={styles.itemsHeaderText}>Nearby Restaurants</Text>
                        <Text numberOfLines={1} style={styles.itemsHeaderDescription}>
                            + {
                                RestLIST?.RestaurantsList?.length
                            } restaurants found in your area
                        </Text>
                        {
                            RestLIST?.RestaurantsList?.map((item, index) => (
                                <TouchableOpacity key={index} activeOpacity={.6} onPress={() => navigateTOOrderScreen(item.id)}>

                                    <View style={styles.restListContainer}>
                                        <Image
                                            source={item?.image}
                                            style={styles.restImage}
                                            PlaceholderContent={<ActivityIndicator animating color={'#ffffff'} />}
                                            placeholderStyle={{ backgroundColor: '#f5b350' }}
                                        />
                                        <View style={styles.restInfoContainer}>
                                            <View>
                                                <Text numberOfLines={1} style={styles.restName}>{item?.name}</Text>
                                                <Text numberOfLines={1} style={styles.restAddress}>
                                                    {
                                                        item?.foods?.map((food) => { return food + ' ,' })
                                                    }
                                                </Text>
                                            </View>
                                            <View style={styles.restRatingContainer}>
                                                <Text style={styles.restRating}>{item?.rating}</Text>
                                                <View style={styles.restDiliveryContainer}>
                                                    <FontAwesome name="motorcycle" size={14} color="#3f3f3f" />
                                                    <Text style={styles.restDilivery}>Delivery</Text>
                                                    <Text style={styles.restDiliveryPrice}>2000 IQD</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            ))
                        }
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Nearby

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    searchContainer: {
        paddingHorizontal: 20
    },
    itemsContainer: {
        padding: 20,
    },
    itemsHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemsHeaderDescription: {
        fontSize: 14,
        color: '#505050',
        marginBottom: 15,
    },
    restListContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
    },
    restImage: {
        width: 60,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'cover',
    },
    restInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    restName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    restAddress: {
        fontSize: 14,
        color: '#696969',
        maxWidth: 200,

    },
    restRatingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    restRating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f5b350',
    },
    restDiliveryContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '30%',

    },
    restDilivery: {
        fontSize: 14,
        color: '#505050',
        marginHorizontal: 5,
    },
    restDiliveryPrice: {
        fontSize: 14,
        color: '#f5b350',
    }


})