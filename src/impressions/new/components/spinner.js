import { HStack, Heading, Spinner } from "native-base"

const s = opts =>{
    return (
        <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
                {opts.text}
            </Heading>
        </HStack>
    )
}

export default s