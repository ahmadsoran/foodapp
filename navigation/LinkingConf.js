
import { makeUrl } from 'expo-linking';


const linking = {
    prefixes: [makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    home: {
                        screens: {
                            home: 'home',
                        },
                    },
                    orderScreen: {
                        screens: {
                            orderScreen: 'OrderScreen',
                        },
                    },
                    cartScreen: {
                        screens: {
                            cartScreen: 'CartScreen',
                        },
                    },
                    confirmOrderScreen: {
                        screens: {
                            confirmOrderScreen: 'ConfirmOrderScreen',
                        },
                    },
                    Maps: {
                        screens: {
                            Maps: 'Maps',
                        },
                    },


                },

            },
            Modal: 'modal',
            NotFound: '*',
        },
    },
};

export default linking;
