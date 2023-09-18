import { Box, Center, Text } from "native-base"

const ProductView = props => {
    const {productItem} = props
    return (
        <Center>
            <Box>
                {
                    <Text>{productItem.id}</Text>
                }
            </Box>
        </Center>
        
    )
}

export default ProductView