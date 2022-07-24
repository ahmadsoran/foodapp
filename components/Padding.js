import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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