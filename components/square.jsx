import { View, Text, StyleSheet, Pressable } from 'react-native';


export const Square = ({ children, isSelected, updateBoard, index }) => {
    const style = `square ${isSelected ? 'is-selected' : ''}`
    const handleTap = () => { updateBoard(index) }

    return (
        <View style={isSelected ? [styles.square, styles.isSelected] : styles.square}>
            <Pressable style={styles.button} onPress={handleTap}>
                <Text style={styles.number}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    square: {

        height: 100,
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        color: 'white',
        fontSize: 50,

    },
    isSelected: {
        color: '#fff',
        backgroundColor: '#09f',
    },

});