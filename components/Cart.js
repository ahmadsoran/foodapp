import { Fontisto, MaterialIcons } from '@expo/vector-icons'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import useStoreForOrderFoods from '../app/Slices/OrderFoodSlice'
import { SwipeListView } from 'react-native-swipe-list-view';
import Animate, { FadeOutDown, FadeInUp } from 'react-native-reanimated';
function Basic() {
    const { foods } = useStoreForOrderFoods()
    const setOrderFoods = useStoreForOrderFoods((state) => state.setOrderFoods)
    const deleteRow = (rowID) => {
        const newData = foods.filter(item => item.id !== rowID)
        setOrderFoods(newData)
    };

    const renderItem = ({ item, index }) => <View key={index} style={styles.container}>
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Image source={item?.image} style={styles.itemImage} />
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

    const renderHiddenItem = (data) =>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteRow(data.item.id)}>
            <MaterialIcons name="delete" size={30} color="white" />
        </TouchableOpacity>


    return <SwipeListView data={foods} renderItem={renderItem} renderHiddenItem={renderHiddenItem}
        rightOpenValue={-100}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        disableRightSwipe={true}
        ListFooterComponent={() => {
            return (
                foods.length > 0 &&
                <View style={styles.fee}>
                    <View style={styles.feeInfo}>
                        <Fontisto name="motorcycle" size={24} color="#3d3d3dab" />
                        <Text style={styles.feeText}>Delivery</Text>
                    </View>
                    <Text style={styles.feePrice}>
                        2000 IQD
                    </Text>
                </View>
            )
        }}

    />;
}
export default function Cart() {
    const { foods } = useStoreForOrderFoods()
    const totalPrices = foods.map(item => {
        return parseInt(item.price) * parseInt(item.QT)
    });
    const totalPrice = totalPrices.reduce((a, b) => a + b, 0) + 2000;
    const totalPriceWithComma = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <SafeAreaView>
            <View style={{ height: '100%' }}>
                <Basic />
                {
                    foods.length > 0 &&
                    <Animate.View entering={FadeInUp} exiting={FadeOutDown}>
                        <View style={styles.total}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalPrice}>{totalPriceWithComma} IQD</Text>
                        </View>
                        <TouchableOpacity style={styles.checkoutBtn} activeOpacity={.9}>
                            <View style={styles.checkoutBtnContainer}>
                                <Text style={styles.checkoutText}>Check out</Text>
                            </View>
                        </TouchableOpacity>
                    </Animate.View>
                }
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
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
        borderTopWidth: 1,
        borderTopColor: '#ccc',
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
        width: 100,
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
    deleteBtn: {
        backgroundColor: '#ff0000',
        padding: 10,
        width: 100,
        height: 91,
        position: 'absolute',
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',


    },
    checkoutBtn: {
        width: '100%',
        height: 50,
        overflow: 'hidden',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 10,

    },
    checkoutText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    checkoutBtnContainer: {
        backgroundColor: '#f5b350',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    total: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20%',
        padding: 20,

    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    totalPrice: {
        fontSize: 16,
        color: '#ec8e00',
        fontWeight: 'bold',
    },
    fee: {
        padding: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    feeInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    feeText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#3d3d3dab',

    },
    feePrice: {
        fontSize: 16,
        color: '#ec8e00',
        fontWeight: 'bold',

    }

})
