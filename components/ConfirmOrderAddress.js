import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Input } from '@rneui/themed'
const ConfirmOrderAddress = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Diliver to:</Text>
                <TouchableOpacity>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.addressContainer}>
                <Input

                    placeholder="Address"
                    inputContainerStyle={styles.addressInput}
                    value="example user Address"
                    disabled

                />
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}></Text>
                <TouchableOpacity>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.addressContainer}>
                <Input

                    placeholder="Address"
                    inputContainerStyle={styles.addressInput}
                    value="Road/apartment num"
                    disabled

                />
            </View>
        </View>
    )
}

export default ConfirmOrderAddress

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
        width: '100%',

    },
    headerTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    changeText: {
        fontSize: 14,
        color: '#2b2b2b',
        opacity: 0.8,
    },
    addressContainer: {
        marginTop: 20,

    },
    addressInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '100%',
    }
})