import React from 'react'
import { Counter } from './Counter/Counter'
import store from './redux/store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';
import basicRedux from '../basicRedux'
const Tab = createBottomTabNavigator();

export default function Navigator(){
    return (
        // <Provider store={store}>
        //     <Counter/>
            

        // </Provider>

        <Provider store={store} >            
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Counter" component={Counter} options={{
                        headerTitle: 'Redux',
                        tabBarOptions: {
                            showIcon: false
                        },
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f4511ea6',
                        }, headerTitleStyle: {
                            color: 'white',
                        },
                       
                    }}/>
                    <Tab.Screen name ="basic redux" component={basicRedux} options={{
                        headerTitle: 'BasicRedux',
                        tabBarOptions: {
                            showIcon: false
                        },
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f4511ea6',
                        }, headerTitleStyle: {
                            color: 'white',
                        },
                        
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
    
}
  
