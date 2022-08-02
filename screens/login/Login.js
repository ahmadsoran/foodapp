import { Button, Input } from '@rneui/themed'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Login = () => {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior='position'
            >

                <View style={styles.container}>
                    <View style={styles.loginLogo}>
                    </View>
                    <View style={styles.loginForm}>
                        <Text style={styles.loginLogoText}>
                            Food
                            <Text style={styles.loginLogoText2}>
                                App
                            </Text>
                        </Text>
                        <Input
                            style={styles.input}
                            placeholderTextColor="#7272727e"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            label="Email"

                        />
                        <Input
                            style={styles.input}
                            placeholderTextColor="#000000"
                            autoCapitalize="none"
                            autoCorrect={false}
                            label="Password"
                            secureTextEntry={true}

                        />

                        <Button
                            containerStyle={styles.loginButton}
                            title="Login"
                            buttonStyle={
                                {
                                    backgroundColor: '#f5b350',
                                }
                            }
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        height: '100%',


    },
    loginLogo: {


    },
    loginLogoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 50,
    },
    loginLogoText2: {
        color: '#f5b350',
    },
    loginForm: {
        width: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        padding: 10,
    },
    loginButton: {
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
    }
})