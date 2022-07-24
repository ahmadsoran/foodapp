import { View, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../../components/Categories'
import DiscountCard from '../../components/DiscountCard'
import Padding from '../../components/Padding'
import SearchInput from '../../components/SearchInput'
import TopRestaurants from '../../components/TopRestaurants'

export default function Home({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <ScrollView>
                    <DiscountCard />
                    <Padding>
                        <SearchInput name='Search Food and Restaurants' iconLeft='search' iconRight='filter-list' />
                    </Padding>
                    <Categories />
                    <TopRestaurants />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}