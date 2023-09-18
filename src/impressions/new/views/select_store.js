import { Box, Center } from "native-base"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import ButtonStore from "../components/button_store"
import { useSelector, useDispatch } from 'react-redux';
import Spinner from "../components/spinner";
import axios from 'axios'


const SelectStore = ({navigation}) =>{
    const [storesList, setStoresList] = useState([])
    const newImpression = useSelector(store => store.newImpression); //instancia do objeto 'newImpression' que é um Redux
    const session = useSelector(store => store.session)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    const clickHandler = storeNumber =>{
        // atualizando pelo dispatcher o valor do store_id
        dispatch({
            type:'SET_STORE_ID',
            value: storeNumber
        })

        navigation.push('select_paper')
    }

    const getStoresList = _ =>{
        let config = {
            headers: {
                'uid': session.uid,
                'client': session.client, 
                'access-token': session.access_token
            }
        }
        axios.get('https://evolutionpdv.com.br/api/v3/stores/',config).then(data=>{
            setStoresList(data.data.data.map(x=>({name: x.attributes.name, id: x.id})))
            setLoading(false)
        })
        
    }

    useEffect(_=>{
        getStoresList()
    },[])
    

    return (
        <Center>
            <Box
                mb={2}
                p={5}
                rounded="lg"
                >
                    <Text fontWeight="medium"  fontSize="lg">
                        Selecione a Loja
                    </Text>
                </Box>
            {
                !loading ?
                    storesList.map((store) => 
                        (<ButtonStore onclick={clickHandler} key={store.id} store={store}></ButtonStore>)
                    )
                    
                :
                    <Spinner text={"Carregando lista de lojas"}></Spinner>
                
            }       
            <Text>Loja selecionada é a: {newImpression.store_id}</Text>     
        </Center>
    )
} 

export default SelectStore