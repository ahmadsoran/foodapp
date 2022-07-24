import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyColor from '../assets/styles/color'
import FoodListHorizontolScrollable from './FoodListHorizontolScrollable'
const MyTheme = MyColor()
const Categories = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerTextLeft}>Categories</Text>
                <TouchableOpacity activeOpacity={.5}>
                    <Text style={styles.headerTextRight}>View All</Text>
                </TouchableOpacity>
            </View>
            <FoodListHorizontolScrollable />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,

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
    }
})