import { View, Text, StyleSheet } from 'react-native';


export const Square = ({ children, isSelected, updateBoard, index }) => {
    // const style = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => { updateBoard(index) }

    return (
        <View style={styles.square}>
            <Text style={styles.number}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
        gap: 20,
        justifyContent: 'center'
    },
    number: {

        textAlign: 'center',
        color: 'white',
        fontSize: 50,
    },
});