import { Box, Center, IconButton, Input, Text } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import React, { useState } from 'react'
import ProductList from './product_list'
import { useSelector } from 'react-redux'
import axios from 'axios'

const FindProduct = ({navigation}) =>{
    const [button_status, setButtonStatus] = useState(false)
    const [product_name, setProductName] = useState('')
    const [productList, setProductList] = useState([])
    const session = useSelector(store => store.session)
    const newImpression = useSelector(store => store.newImpression)

    const pressHandler = _ => {
        getProduct(product_name).then(product_list=>{
            setProductList(product_list.data)
            
            //ativando o botao
            setButtonStatus(false)
            // setProductItem(products_list.data.data || {})
        })
    }

    const getProduct = async product_name =>{
        setButtonStatus(true)
        let config = {
            headers: {
                'uid': session.uid,
                'client': session.client, 
                'access-token': session.access_token
            }
        }
        return axios.get(`https://evolutionpdv.com.br/api/v3/stores/${newImpression.store_number}/products/products_by_description/${product_name}.json`, config)
    }

    const changeHandler = text => {
        setProductName(text)
    }

    return (
        <Center>
            <Box alignItems="center">
            <Input value={product_name} type={"text"} w="100%" onChangeText={changeHandler} backgroundColor={'white'} InputRightElement={
                    <IconButton disabled={button_status} onPress={pressHandler} size="xs" variant='solid' rounded="none" w="1/6" h="full" _icon={{as: Icon, name: 'search'}}></IconButton>}
                />
            </Box>
            <Box>
                <ProductList productList={productList} navigation={navigation}></ProductList>
            </Box>
        </Center>
    )
}

export default FindProduct