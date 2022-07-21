import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../Colors";
import {styles} from "../Styles";

export interface IServer {
    title: string;
    address: string;
    username: string;
    password: string;
}

interface IServersScreenProps {
    navigation: NavigationProp<any>;
    route: {
        params: {
            servers: IServer[],
        }
    };
}

export default class ServersScreen extends React.Component<IServersScreenProps> {
    public render() {
        const servers = this.props.route.params.servers.map((server: IServer, index: number) => (
            <TouchableOpacity
                key={index}
                style={styles.server}
                onPress={() =>this.props.navigation.navigate('Carl VPN', { server })}
            >
                <Text style={{ color: Colors.white }}>{server.title}</Text>
            </TouchableOpacity>
        ));

        return (
            <LinearGradient colors={[Colors.blue, Colors.blueDark]} style={styles.screen}>
                <ScrollView>{servers}</ScrollView>
            </LinearGradient>
        );
    }
}
