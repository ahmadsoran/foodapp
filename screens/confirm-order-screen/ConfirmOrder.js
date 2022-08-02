import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Image } from '@rneui/themed'
import useStoreForOrderFoods from '../../app/Slices/OrderFoodSlice'
import ConfirmOrderAddress from '../../components/ConfirmOrderAddress'

const ConfirmOrder = ({ navigation }) => {
    const { foods, orderFrom } = useStoreForOrderFoods()
    const navigateToMaps = () => {
        navigation.navigate('Maps')
    }
    return (
        <>

            {
                foods.length > 0 &&
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.topContainer}>
                        <Text style={styles.topText}>Order From</Text>
                        <View style={styles.topInfo}>
                            <Image
                                source={require('../../assets/img/restOnePizza.jpg')}
                                style={styles.topImage}
                                PlaceholderContent={<ActivityIndicator animating color={'#ffffff'} />}
                                placeholderStyle={{ backgroundColor: '#f5b350' }}
                            />
                            <View style={styles.topInfoTextContainer}>
                                <Text numberOfLines={1} style={styles.topInfoText}>{orderFrom?.name}</Text>
                                <Text numberOfLines={2} style={styles.topInfoTextAddress}>{orderFrom?.address}</Text>
                            </View>
                        </View>
                    </View>
                    <ConfirmOrderAddress />
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomText}>Order Items</Text>
                        {
                            foods.map((item, index) => (

                                <View key={index} style={styles.container}>
                                    <View style={styles.item}>
                                        <View style={styles.itemInfo}>
                                            <Image
                                                source={item?.image}
                                                style={styles.itemImage}
                                                transition={'fade'}
                                                transitionDuration={300}
                                                placeholderStyle={{ backgroundColor: '#f5b350' }}
                                                PlaceholderContent={<ActivityIndicator animating color={'#ffffff'}


                                                />
                                                }

                                            />
                                            <Text style={styles.qt}>{item?.QT} X</Text>

                                            <Text numberOfLines={1} style={styles.name}>{item?.name}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.itemPrice}>
                                                {parseInt(item?.price) * parseInt(item?.QT)} IQD
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.recept}>
                        <Text style={styles.receptText}>Recept</Text>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>
                                Discount
                            </Text>
                            <Text style={styles.discountPrice}>
                                0 IQD
                            </Text>
                        </View>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>
                                Delivery fee
                            </Text>
                            <Text style={styles.discountPrice}>
                                2000 IQD
                            </Text>
                        </View>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>
                                Subtotal
                            </Text>
                            <Text style={styles.discountPrice}>
                                {orderFrom?.totalPrice} IQD
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            }
            <View style={styles.orderBtn}>
                <Button
                    onPress={navigateToMaps}
                    containerStyle={styles.orderBtnStyle} buttonStyle={{
                        backgroundColor: '#f5b350',

                    }}>Place Order</Button>
            </View>
        </>

    )
}

export default ConfirmOrder

const styles = StyleSheet.create({
    ScrollView: {
        height: '100%',
        backgroundColor: 'whitesmoke',
    },
    topContainer: {
        padding: 20,
        backgroundColor: '#ffffff',
        marginVertical: 10,

    },
    topText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,

    },
    topInfo: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    topImage: {
        width: 60,
        height: 60,
        borderRadius: 1000,
        marginRight: 15,
        resizeMode: 'cover',
        marginTop: 10,
    },
    topInfoTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    topInfoText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    topInfoTextAddress: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 5,
        maxWidth: 185,

    },
    container: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        overflow: 'hidden',



    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    itemInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 50,
        borderRadius: 10,
        marginRight: 10,

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        width: 80,
    },
    qt: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    itemPrice: {
        fontSize: 16,
        opacity: 0.5,
    },
    bottomContainer: {
        paddingVertical: 20,
        backgroundColor: '#ffffff',
    },
    bottomText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        margin: 20,

    },
    recept: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        marginBottom: '25%',
    },
    receptText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    discount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    discountText: {
        fontSize: 15,
        color: 'gray',
    },
    discountPrice: {
        fontSize: 15,
        color: 'gray',

    },
    orderBtn: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,

    },
    orderBtnStyle: {
        backgroundColor: '#f5b350',
        borderRadius: 10,
    }
})