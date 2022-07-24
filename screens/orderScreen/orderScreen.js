import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Data from '../../app/RestLIST'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import Padding from '../../components/Padding';
import useStoreForOrderFoods from '../../app/Slices/OrderFoodSlice';

const OrderScreen = () => {
    const { params } = useRoute()
    const { restID } = params
    const findRest = Data.RestaurantsList.find(item => item.id === restID)
    const { foods } = useStoreForOrderFoods()
    const setOrderFoods = useStoreForOrderFoods((state) => state.setOrderFoods)
    const setFoodsHandler = ({ name, image, id, QT, price }) => {
        // if food is not in the list
        if (!foods.find(item => item.id === id)) {
            setOrderFoods([...foods, { name, image, id, QT, price }])
        }


    }
    const UpadteQThandler = (id) => {
        const findById = foods?.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    QT: item.QT + 1
                }
            }
            return item

        })
        setOrderFoods(findById)
    }
    const DownadteQThandler = (id) => {
        // if the QT is less than 1 then remove the food from the list else decrease the QT
        const findById = foods?.map(item => {
            if (item.id === id) {
                if (item.QT === 1) {
                    return null
                }
                return {
                    ...item,
                    QT: item.QT - 1
                }
            }
            return item

        }
        ).filter(item => item !== null)
        setOrderFoods(findById)
    }



    return (
        <ImageHeaderScrollView
            maxHeight={300}
            minHeight={100}
            maxOverlayOpacity={0.5}
            minOverlayOpacity={0.1}
            fadingEdgeLength={5}
            foregroundParallaxRatio={1.2}
            headerImage={findRest.image}
            childrenStyle={{
                borderRadius: 10,
            }}

            renderForeground={() => (
                <View style={styles.headerTextContainer} >
                    <View style={styles.headerText}>
                        <Text style={styles.restname}>{findRest.name}</Text>
                        <Text style={styles.restDilivery}>{findRest.deliveryTime}</Text>
                        <Text numberOfLines={1} style={styles.restfoods}>{findRest.foods.map(text => text + ' ,')}</Text>
                        <View style={styles.headerBottom}>
                            <Text style={styles.restRating}>
                                <Ionicons name='ios-star' size={15} color='gold' /> {findRest.rating}
                            </Text>
                            <Text style={styles.restMinOrder}>
                                <Ionicons name="md-wallet-outline" size={15} color="#00000086" /> {findRest.minOrder}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        >
            <View style={{ height: '100%' }}>
                <TriggeringView onHide={() => console.log("text hidden")}>
                    <Padding>
                        {
                            findRest.foodsData.map((item, index) => {
                                return (
                                    <View key={index} style={styles.foodListContainer}>
                                        <TouchableOpacity activeOpacity={.5}>

                                            <View style={styles.foodList}>
                                                <Image fadeDuration={300} source={item.image} style={styles.foodImage} />
                                                <View style={styles.foodInfo}>
                                                    <Text numberOfLines={1} style={styles.foodListTitle}>
                                                        {item.name}
                                                    </Text>
                                                    <Text style={styles.foodListPrice}>{item.price}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {
                                            foods?.find((items) => items?.id === item?.id && items.QT > 0) ?
                                                <View style={styles.foodListQuantity}>
                                                    <TouchableOpacity onPress={() => DownadteQThandler(item.id)} style={styles.foodListQuantityButton}>
                                                        <Ionicons name='ios-remove' size={20} color='#00000086' />
                                                    </TouchableOpacity>
                                                    <Text style={styles.foodListQuantityText}>{
                                                        foods?.find((items) => items?.id === item?.id)?.QT
                                                    }</Text>
                                                    <TouchableOpacity onPress={() => UpadteQThandler(item.id)} style={styles.foodListQuantityButton2}>
                                                        <Ionicons name="ios-add" size={20} color="#00000086" />

                                                    </TouchableOpacity>

                                                </View>
                                                :
                                                <TouchableOpacity onPress={() => setFoodsHandler({
                                                    id: item.id,
                                                    name: item.name,
                                                    image: item.image,
                                                    price: item.price,
                                                    QT: 1,
                                                })} style={styles.foodListQuantityButton}>
                                                    <View style={styles.foodListQuantity}>
                                                        <Text style={styles.foodListQuantityText}>Add</Text>
                                                    </View>
                                                </TouchableOpacity>
                                        }
                                    </View>
                                )
                            }
                            )
                        }
                    </Padding>
                </TriggeringView>
            </View>
        </ImageHeaderScrollView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    headrContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: 'white',

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerTextContainer: {
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
    },
    headerText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        position: 'absolute',
        bottom: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    restname: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1b1b1b',
        textAlign: 'center',
    },
    restDilivery: {
        fontSize: 15,
        color: '#1b1b1b',
        textAlign: 'center',
        opacity: 0.8,
        marginVertical: 5,
    },
    headerBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    restfoods: {
        fontSize: 15,
        color: '#1b1b1b',
        textAlign: 'center',
        opacity: 0.4,
        marginBottom: 5,

    },
    restRating: {
        fontSize: 15,
        color: '#1b1b1b',
        textAlign: 'center',
        marginHorizontal: 10,

    },
    restMinOrder: {
        fontSize: 15,
        color: '#1b1b1b',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    foodListContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    foodList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',

    },
    foodImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
    },
    foodInfo: {},
    foodListTitle: {
        fontSize: 15,
        color: '#1b1b1b',
    },
    foodListPrice: {
        fontSize: 15,
        color: '#1b1b1b',
    },
    foodListQuantity: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5b35b',
        borderRadius: 10,
        maxWidth: 100,
    },
    foodListQuantityText: {
        fontSize: 20,
        color: '#1b1b1b',
        paddingHorizontal: 10,
        paddingVertical: 5,


    },
    foodListQuantityButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    foodListQuantityButton2: {
        paddingHorizontal: 10,
        paddingVertical: 10,

    }


})