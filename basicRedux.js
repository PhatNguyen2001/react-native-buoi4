import React from 'react';
import {Text , SafeAreaView , Button , View} from 'react-native'
import { State } from 'react-native-gesture-handler';
import {createStore} from 'redux'
function basicRedux() {
    const initialState = {
        value: 0
    }
    function counterReducer(state = initialState, action) {
        switch (action.type) {
          case 'counter/incremented':
            return { value: state.value + 1 }
          case 'counter/decremented':
            return { value: state.value - 1 }
          default:
            return state
        }
      }
    let store = createStore(counterReducer)
    // console.log(store.dispatch({ type: 'counter/incremented' }).value)
    return (
        <SafeAreaView>
                <Button
                aria-label ="Increment value"
                onPress={() => store.dispatch({ type: 'counter/incremented' })}
                title ="Increment"
                />
                <Text>
                    {store.getState().value}
                </Text>

                <Button 
                aria-label="Decrement value"
                title="Decrement"
                onPress={() => store.dispatch({ type: 'counter/incremented' })}
                />
                
                
            
        </SafeAreaView>
        

    );
}

export default basicRedux;