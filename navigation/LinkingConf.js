
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

                },

            },
            Modal: 'modal',
            NotFound: '*',
        },
    },
};

export default linking;
