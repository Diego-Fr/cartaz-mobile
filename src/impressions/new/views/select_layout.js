import axios from "axios"
import { Box, Center, View } from "native-base"
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { useSelector } from "react-redux"
import Spinner from '../components/spinner'
import ImageButton from "../components/image_button"
import LayoutButton from "../components/layout_button"

const SelectLayout = _ =>{
    const [layoutsList, setLayoutsList] = useState([])
    const session = useSelector(store=> store.session)
    const newImpression = useSelector(store=> store.newImpression)
    const [loading, setLoading] = useState(true)
    const getLayouts = async _ =>{
        let config = {
            headers: {
                'uid': session.uid,
                'client': session.client, 
                'access-token': session.access_token
            }
        }
        return axios.get(`https://evolutionpdv.com.br/api/v3/stores/${newImpression.store_number}/sectors/${newImpression.sector_id}/available_layouts`, config)
    }

    useEffect(_=>{
        getLayouts().then(data=>{
            setLayoutsList(data.data.data)
            setLoading(false)
        })
    },[])

    return (
        <Center>
            <Box>
                {
                    loading ?
                        (<Spinner text={"Carregando lista de layouts"}></Spinner>)
                    :
                        layoutsList.map((layout) => 
                            (<LayoutButton key={layout.id} src={layout.attributes.snapshot_url.url} text={layout.attributes.description} id={layout.id} ></LayoutButton>)
                        )
                }
            </Box>
        </Center>
    )
}

export default SelectLayout