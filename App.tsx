import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from "./src/screens/StartScreen";
import ServersScreen, {IServer} from "./src/screens/ServersScreen";
import Colors from "./src/Colors";

const Stack = createStackNavigator();

const App = () => {
    const servers: IServer[] = [
        {
            title: '🇩🇪 Germany 2',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },        {
            title: '🇩🇪 Germany 3',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },        {
            title: '🇩🇪 Germany 4',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
        {
            title: '🇳🇱 Netherlands 1',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
        {
            title: '🇳🇱 Netherlands 2',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
        {
            title: '🇳🇱 Netherlands 3',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
        {
            title: '🇳🇱 Netherlands 4',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
        {
            title: '🇺🇸 USA 1',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
        {
            title: '🇺🇸 USA 2',
            address: 'adelaide.hideservers.net',
            username: 'jermainee',
            password: '9W9un9D4t2gojgGqHmMT2',
        },
    ];

    const options = {
        headerStyle: {
            backgroundColor: Colors.blue,
            shadowColor: Colors.transparent,
        },
        headerTintColor: Colors.white,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="Carl VPN" options={options} component={StartScreen} initialParams={{server: servers[0]}}/>
                <Stack.Screen name="Servers" options={options} component={ServersScreen} initialParams={{servers: servers}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
