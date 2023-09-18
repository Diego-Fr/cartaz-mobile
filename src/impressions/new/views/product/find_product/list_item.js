import { Pressable } from "native-base";
import { StyleSheet, Text } from "react-native"

const ListItem = props =>{
    const product = props.product
    return (
        <Pressable style={styles.container}
          onPress={() => props.onPress(product)}
        >
            <Text>{product.description}</Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      backgroundColor: 'white',
      padding: 10
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


export default ListItem