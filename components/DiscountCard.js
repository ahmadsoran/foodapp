import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyColor from '../assets/styles/color'
const MyTheme = MyColor();
const DiscountCard = () => {
    return (
        <TouchableOpacity activeOpacity={.7}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <View style={styles.flex}>
                            <Text style={styles.discoundNumber}>
                                30%
                            </Text>
                            <Text style={styles.discoundText}>
                                Discound for
                            </Text>
                        </View>
                        <Text style={styles.discoundTextBreak}>
                            fast food
                        </Text>

                    </View>
                    <Image style={styles.cardImage} source={require('../assets/img/pizza.png')} />
                    <View style={styles.shapeOne}></View>
                    <View style={styles.shapeTwo}></View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DiscountCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        borderRadius: 10,
        width: '100%',
        backgroundColor: MyTheme.primaryYellow,
        height: 130,
        position: 'relative',
        overflow: 'hidden',
    },
    cardText: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        padding: 20,
        zIndex: 3,

    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    discoundNumber: {
        fontSize: 30,
        color: MyTheme.textColor,

    },
    discoundText: {
        fontSize: 20,
        marginHorizontal: 10,
        color: MyTheme.textColor,
    },
    discoundTextBreak: {
        fontSize: 20,
        color: MyTheme.textColor,


    },
    cardImage: {
        position: 'absolute',
        bottom: -20,
        right: 10,
        width: 120,
        height: '90%',
        zIndex: 1,
    },
    shapeOne: {
        position: 'absolute',
        top: -15,
        right: -15,
        width: 100,
        height: 100,
        backgroundColor: '#fcc374ff',
        borderRadius: 1000,
    },
    shapeTwo: {
        position: 'absolute',
        top: -25,
        right: 15,
        width: 90,
        height: 90,
        backgroundColor: '#ffb144e1',
        borderRadius: 1000,
        zIndex: -2,
    }

})