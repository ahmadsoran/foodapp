import { EvilIcons, FontAwesome, Fontisto } from '@expo/vector-icons';
import { Image } from '@rneui/themed';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MapView, { MarkerAnimated } from 'react-native-maps';
const Maps = () => {
    return (
        <>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 35.57201228306946,
                    longitude: 45.407009124332845,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0431,
                }}
                loadingEnabled={true}
                loadingIndicatorColor={'#ffffff'}
                showsMyLocationButton={true}
                showsUserLocation={true}
                showsBuildings={true}
                showsPointsOfInterest={true}
                showsCompass={true}
                showsTraffic={true}
                followsUserLocation={true}
                rotateEnabled={true}
                focusable={true}


            >

                <MarkerAnimated
                    coordinate={{
                        latitude: 35.57101228306946,
                        longitude: 45.407009124332845,
                    }}
                    title={'Driver Name'}
                    description={'Dilivering from example resturant'}



                >
                    <View style={styles.driverMark}>
                        <Fontisto name="motorcycle" size={34} color="#38383885" />
                    </View>
                </MarkerAnimated>
                <MarkerAnimated
                    coordinate={{ latitude: 35.57734228306946, longitude: 45.407009124332845 }}
                    title={'User Home'}
                >
                    <View style={styles.userHomeMark}>
                        <FontAwesome name="home" size={34} color="#ffffffd3" />
                    </View>
                </MarkerAnimated>

            </MapView>

            <View style={styles.orderDetail}>
                <View style={styles.dilivieryAddress}>
                    <EvilIcons name="location" style={styles.dilivieryAddressIcon} size={40} color="#000000e3" />
                    <View style={styles.dilivieryAddressText}>
                        <Text style={styles.dilivieryUserAddressText}>
                            example user address
                        </Text>
                        <Text style={styles.dilivieryAddressText}>
                            Delivery Address
                        </Text>

                    </View>
                </View>
                <View style={styles.dilivieryAddress}>
                    <EvilIcons name="clock" style={styles.dilivieryAddressIcon} size={40} color="#000000e3" />
                    <View style={styles.dilivieryAddressText}>
                        <Text style={styles.dilivieryUserAddressText}>
                            20 - 30 min
                        </Text>
                        <Text style={styles.dilivieryAddressText}>
                            Estimated Delivery Time
                        </Text>

                    </View>
                </View>
                <View style={styles.dilivieryAddress}>
                    <Image
                        source={require('../../assets/img/dili.png')}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                            marginRight: 10,
                        }}
                        transition={'fade'}
                        transitionDuration={300}
                        placeholderStyle={{ backgroundColor: '#f5b350' }}
                        PlaceholderContent={<ActivityIndicator animating color={'#ffffff'}
                        />}
                    />
                    <View style={styles.dilivieryAddressText}>
                        <Text style={styles.dilivieryUserAddressText}>
                            Driver Name
                        </Text>
                        <Text style={styles.dilivieryAddressText}>
                            0770 000 00 00
                        </Text>

                    </View>
                </View>
            </View>

        </>
    )
}

export default Maps

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },
    orderDetail: {
        backgroundColor: '#fffffff3',
        padding: 10,
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    dilivieryAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        paddingVertical: 10,

    },
    dilivieryAddressText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    dilivieryUserAddressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#424242',
        marginBottom: 5,


    },
    dilivieryAddressText: {
        fontSize: 14,
        color: '#ccc',
    },
    dilivieryAddressIcon: {
        marginRight: 10,

    },
    marker: {
        width: 10,
        height: 10,
    },
    userHomeMark: {
        width: 50,
        height: 50,
        borderRadius: 2005,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'center',
    },
    driverMark: {
        width: 50,
        height: 50,
        borderRadius: 2005,
        backgroundColor: '#f5b350',
        alignItems: 'center',
        justifyContent: 'center',
    }
})