import { Box, Button, Center, IconButton, Input, InputGroup, InputRightAddon, Stack } from "native-base"
import React, { useState } from "react"
import { Text } from "react-native"
import {MaterialDesign} from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProductView from "./product_view"
import { useSelector } from "react-redux"
import axios from "axios"
const SelectProduct = _ =>{
    const [product, setProduct] = useState('')
    const [productItem, setProductItem] = useState({})
    const [productList, setProductList] = useState([])
    const newImpression = useSelector(store=>store.newImpression)
    const session = useSelector(store => store.session)

    const pressHandler = _ => {
        getProduct(product).then(products_list=>{
            setProductItem(products_list.data.data || {})
        })
    }

    const changeHandler = text => {
        setProduct(text)
    }

    const getProduct = async product_name =>{
        let config = {
            headers: {
                'uid': session.uid,
                'client': session.client, 
                'access-token': session.access_token
            }
        }
        return axios.get(`https://evolutionpdv.com.br/api/v3/stores/${newImpression.store_number}/products/${product_name}.json`, config)
    }

    return (
        <Center>
            <Box>
                <Text>Selecione o produto</Text>
            </Box>
            <Box alignItems="center">
                <Input value={product} type={"text"} w="100%" onChangeText={changeHandler} backgroundColor={'white'} InputRightElement={
                    <IconButton onPress={pressHandler} size="xs" variant='solid' rounded="none" w="1/6" h="full" _icon={{as: Icon, name: 'search'}}></IconButton>}
                />
                <Button width={'100%'} leftIcon={<Icon as={Icon} name="barcode" color={'white'}></Icon>} size={'sm'}>Escanear</Button>
            </Box>
            <Box>
                {
                    productItem.id ?
                        <ProductView productItem={productItem}></ProductView>    
                    :
                    <Text>Carregando</Text>
                    
                }
                
            </Box>
        </Center>
    )
}

export default SelectProduct

