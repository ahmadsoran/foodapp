import { StyleSheet, View } from 'react-native'

const Padding = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Padding

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})