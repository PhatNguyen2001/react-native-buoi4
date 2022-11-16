import { useState } from "react";
import { Button, SafeAreaView , View , Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector , useDispatch } from "react-redux";
import { decrement , increment , incrementByAmount} from "../redux/slices/counterSlice";


export  function Counter() {
    const [name,setName] = useState('');
    const [number,setNumber] = useState(0); 
    const count = useSelector(state => state.counter.value); 
    const dispatch = useDispatch();
    
    
    return(
        <SafeAreaView>
            <View> 
                <Button
                aria-label ="Increment value"
                onPress={() => dispatch(increment())}
                title ="Increment"
                />
                <Text>name: {count.name}</Text>
                <Text>number: {count.number}</Text>

                <Button 
                aria-label="Decrement value"
                title="Decrement"
                onPress={()=> dispatch(decrement())}
                />
                <Button 
                aria-label="DecrementByamount value "
                title="Decrement"
                onPress={()=> dispatch(incrementByAmount({name:name ,number:number }))}
                />
                <TextInput
                placeholder="name"
                value={name}
                onChangeText={setName}
                />
                <TextInput
                placeholder="number"
                value={number}
                onChangeText={setNumber}
                />
            </View>
        </SafeAreaView>
    ); 
}
