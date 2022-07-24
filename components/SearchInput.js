import { MaterialIcons } from '@expo/vector-icons'
import { Icon, Input } from 'native-base'
import { TouchableOpacity } from 'react-native'
const SearchInput = ({ name, iconLeft, iconRight }) => {
    return (
        <Input w={{ base: "100%" }}
            InputLeftElement={<Icon as={<MaterialIcons name={iconLeft} />} size={25} ml="2" color="muted.400" />}
            InputRightElement={
                <TouchableOpacity>
                    <Icon as={<MaterialIcons name={iconRight} />} size={25} mr="2" color="muted.400" />
                </TouchableOpacity>
            }
            p={{ base: "5%" }}
            placeholder={`${name}`}
            borderRadius={10}
            backgroundColor="whitesmoke"
        />
    )
}

export default SearchInput

