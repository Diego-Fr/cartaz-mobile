import { Text, Center } from 'native-base'
import React from 'react'

const Show = ({route}) =>{
    const {product} = route.params
    return (
        <Center>
            <Text>{product.description}</Text>
        </Center>
    )
}

export default Show