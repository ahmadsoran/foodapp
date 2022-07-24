import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
const SearchInput = ({ name, iconLeft, iconRight }) => {
    return (
        <View style={styles.input}>
            <View style={styles.textContainer}>
                <MaterialIcons name={iconLeft} style={styles.iconLeft} size={25} color="#424242b4" />
                <TextInput
                    style={styles.text}
                    placeholder={name}
                    placeholderTextColor='#575757bb'
                    spellCheck={true}

                />
            </View>
            <TouchableOpacity>
                <MaterialIcons name={iconRight} size={25} color="#424242b4" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        position: 'relative',

    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        width: '80%',
        paddingVertical: 15,
    },

})
