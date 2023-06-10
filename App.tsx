import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DisplayUsers from './src/screens/DisplayUsers';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Top 20 users" component={DisplayUsers} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
