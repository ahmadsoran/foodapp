import { EvilIcons } from '@expo/vector-icons'
import { BottomSheet, CheckBox } from '@rneui/themed'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const MyBottomSheet = ({ Visable, onBackdropPress }) => {
    const [Chaked, setChaked] = useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
    })
    const [ChooseSizeActive, setChooseSizeActive] = useState({
        name: 1,
        active: false,
    })
    const checkBoxToggleHandler = (key) => {
        setChaked({
            ...Chaked,
            [key]: !Chaked[key]
        })
    }
    const chooseSizeHandler = (name) => {
        setChooseSizeActive({
            name,
            active: true,
        })

    }
    return (
        <BottomSheet
            isVisible={Visable}
            onBackdropPress={onBackdropPress}
            backdropStyle={styles.backdrop}
            containerStyle={{
                backgroundColor: 'transparent',

            }}

            scrollViewProps={{
                persistentScrollbar: true,
                contentContainerStyle: styles.container,
                scrollEnabled: false,

            }}
        >
            <View style={styles.headerTextContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.topText}>Customize Order</Text>
                </View>
                <View style={styles.DragBtnToClose}>
                    <TouchableOpacity
                        onPress={onBackdropPress}
                        style={styles.DragBtn}>
                        <EvilIcons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.chekBoxContainer}>
                    <CheckBox
                        title='Extra Example 1'
                        textStyle={styles.checkBoxText}
                        checked={Chaked.checked1}
                        uncheckedColor='#f5b350'
                        checkedColor='#f5b350'
                        onPress={() => checkBoxToggleHandler('checked1')}
                    />
                    <CheckBox
                        title='Extra Example 2'
                        textStyle={styles.checkBoxText}
                        checked={Chaked.checked2}
                        uncheckedColor='#f5b350'
                        checkedColor='#f5b350'
                        onPress={() => checkBoxToggleHandler('checked2')}
                    />
                    <CheckBox
                        title='Extra Example 3'
                        textStyle={styles.checkBoxText}
                        checked={Chaked.checked3}
                        uncheckedColor='#f5b350'
                        checkedColor='#f5b350'
                        onPress={() => checkBoxToggleHandler('checked3')}
                    />
                    <CheckBox
                        title='Extra Example 4'
                        textStyle={styles.checkBoxText}
                        checked={Chaked.checked4}
                        uncheckedColor='#f5b350'
                        checkedColor='#f5b350'
                        onPress={() => checkBoxToggleHandler('checked4')}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.itemSizeText}>Example item size</Text>
                    <View style={styles.itemSizeContainer}>
                        <View style={styles.itemSize}>
                            <Text
                                onPress={() => chooseSizeHandler(1)}
                                style={{
                                    ...styles.itemSizeTextChoosen,

                                    backgroundColor: ChooseSizeActive.name === 1 ? '#272727' : 'whitesmoke',
                                    color: ChooseSizeActive.name === 1 ? '#ffffff' : '#141414',
                                }
                                }>Small</Text>
                            <Text
                                onPress={() => chooseSizeHandler(2)}
                                style={{
                                    ...styles.itemSizeTextChoosen,
                                    backgroundColor: ChooseSizeActive.name === 2 ? '#272727' : 'whitesmoke',
                                    color: ChooseSizeActive.name === 2 ? '#ffffff' : '#141414',
                                }
                                }>Medium</Text>
                            <Text
                                onPress={() => chooseSizeHandler(3)}
                                style={{
                                    ...styles.itemSizeTextChoosen,
                                    backgroundColor: ChooseSizeActive.name === 3 ? '#272727' : 'whitesmoke',
                                    color: ChooseSizeActive.name === 3 ? '#ffffff' : '#141414',
                                }
                                }>Large</Text>

                        </View>
                    </View>

                </View>
            </ScrollView>

        </BottomSheet>
    )
}

export default MyBottomSheet

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'transparent',
    },
    container: {
        backgroundColor: '#f5f5fa',
        width: '100%',
        minHeight: '70%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 10,
        overflow: 'hidden',
    },
    ScrollView: {
        height: '100%',
    },
    topContainer: {
        padding: 20,
        backgroundColor: 'whitesmoke',
        borderBottomColor: '#85858565',
        borderBottomWidth: .5,
        position: 'relative',
    },
    topText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    chekBoxContainer: {
        backgroundColor: '#ffffff',
    },
    checkBoxText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
    },
    itemSizeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    itemSize: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',

    },
    itemSizeText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#444444',

    },
    itemSizeTextChoosen: {
        fontSize: 18,
        padding: 15,

    },
    DragBtnToClose: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5,

    },
    headerTextContainer: {
        position: 'relative',
    },
    DragBtn: {
        width: 25,
        height: 25,
        backgroundColor: '#ffffff',
        borderRadius: 1000,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,

    }
})