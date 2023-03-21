import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Square } from './components/square'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export const TURNS = {
  X: '×',
  O: 'o'
}


function App() {
  const [board, setBoard] = useState(() => {
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    return TURNS.X
  })
  const updateBoard = (index) => {
    console.log('hola');
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.board}>
          {board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {/* {console.log(board[index])} */}
                {board[index]}
                {/* {index} */}
              </Square>
            )
          })}
        </View>
        <View style={[styles.board, styles.turns]}>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',

  },
  title: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
  },

  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  turns: {
    gap: 10
  }
});

export default App;
