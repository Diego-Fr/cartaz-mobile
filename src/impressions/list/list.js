import { Button, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import React from "react"


const List = ({navigation}) =>{
    // const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lista de impressões</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Test')}
            />
        </View>
    )
}

export default List