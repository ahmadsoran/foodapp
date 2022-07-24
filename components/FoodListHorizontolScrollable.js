import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'

const FoodListHorizontolScrollable = () => {
    const [Pressed, setPressed] = useState(undefined)
    const FoodList = [
        {
            name: 'Pizza',
            icone: <Ionicons name="pizza-outline" size={44} color="#424242cc" />,
        },
        {
            name: 'Burger',
            icone: <MaterialCommunityIcons name="hamburger" size={44} color="#424242cc" />,
        },
        {
            name: 'BBQ',
            icone: <MaterialCommunityIcons name="food-steak" size={44} color="#424242cc" />,
        },
        {
            name: 'Pasta',
            icone: <MaterialCommunityIcons name="food-fork-drink" size={44} color="#424242cc" />,

        },
        {
            name: 'Shawarma',
            icone: <MaterialCommunityIcons name="food-outline" size={44} color="#424242cc" />,
        },
        {
            name: 'Hot Dog',
            icone: <FontAwesome5 name="hotdog" size={44} color="#424242cc" />,
        },

    ]
    const handlePress = (index) => {
        setPressed(index)
    }
    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate={'normal'}
            style={styles.container}


        >

            {FoodList.map((item, index) => {
                return (
                    <TouchableHighlight
                        onPress={() => handlePress(index)}
                        underlayColor={'#f5f5f5'}
                        style={styles.item}
                        key={index} >
                        <View style={styles.item} >
                            {item.icone}
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                    </TouchableHighlight>
                )
            })}

        </ScrollView>
    )
}

export default FoodListHorizontolScrollable

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,


    },
    item: {
        borderWidth: .2,
        borderColor: 'black',
        borderRadius: 1000,
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
    },
    itemText: {
        fontSize: 12,
        color: 'black',

    }
})