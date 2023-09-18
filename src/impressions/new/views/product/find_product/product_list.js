import {React, useEffect} from 'react'
import { Center, FlatList, Text } from "native-base"
import ListItem from './list_item'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = ({productList, navigation}) =>{
    const dispatch = useDispatch()
    const newImpression = useSelector(store => store.newImpression)
    const onPress = product =>{
        dispatch({type:'SET_PRODUCT_ID', value: product.id})
        navigation.push('confirmation_view', {product:product})
    }

    useEffect(() => {
        console.log(newImpression)
    }, [newImpression]);

    return (
        <Center>
            {
                <FlatList
                    data={productList}
                    renderItem={({item}) => (<ListItem product={item} onPress={onPress}/>)}
                    keyExtractor={item => item.id}
                />
            }
        </Center>
    )
}

export default ProductList