import { Center, Image, Text } from "native-base";
import { Pressable, StyleSheet } from "react-native";

const LayoutButton = opts =>{
    return (
        <Pressable onPress={_=>opts.onclick(opts.id)}>
            <Image
                alt="Alternate Text"
                source={{
                    uri: opts.src
                }} 
                style={styles.logo}
                />
            <Center>
                <Text>{opts.text}</Text>
            </Center>
        </Pressable>
    )
}

export default LayoutButton



const styles = StyleSheet.create({
    logo: {
      width: 150,
      height: 200,
      marginTop: 5,
      marginBottom: 10,
      borderRadius: 5
    },
});