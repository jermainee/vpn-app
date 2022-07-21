import React from 'react';
import {EmitterSubscription, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../Colors";
import PowerIcon from "../icons/PowerIcon";
import {
    connect,
    disconnect,
    getCurrentState,
    onStateChangedListener,
    prepare,
    removeOnStateChangeListener,
    VpnState
} from "react-native-ip-sec-vpn";
import {NetworkInfo} from 'react-native-network-info';
import {styles} from "../Styles";
import {IServer} from "./ServersScreen";

interface IStartScreenProps {
    servers: IServer[];
    navigation: NavigationProp<any>;
    route: {
        params: {
            server: IServer,
        }
    };
}

interface IStartScreenState {
    isBoosted: boolean;
    vpnState: VpnState|null;
    ipAddress: string|null;
}

export default class StartScreen extends React.Component<IStartScreenProps, IStartScreenState> {
    private emitterSubscription: EmitterSubscription|null = null;

    public constructor(props: IStartScreenProps) {
        super(props);
        this.state = {
            isBoosted: false,
            vpnState: null,
            ipAddress: null,
        };
    }

    public componentDidMount() {
        prepare();
        getCurrentState().then(vpnState => this.setState({ vpnState }));
        this.emitterSubscription = onStateChangedListener(state => this.setState({ vpnState: state.state }));
        NetworkInfo.getIPAddress().then(ipAddress => this.setState({ ipAddress }));
    }

    public componentWillUnmount() {
        if (this.emitterSubscription) {
            removeOnStateChangeListener(this.emitterSubscription);
        }
    }

    public render() {
        return (
            <LinearGradient colors={[Colors.blue, Colors.blueDark]} style={styles.screen}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Servers')}>
                        <Text style={{ color: Colors.white }}>{this.props.route.params.server.title}</Text>
                    </TouchableOpacity>

                    <Text style={{ color: Colors.white, marginTop: 10, marginBottom: 80}}>IP {this.state.ipAddress ?? 'undefined'}</Text>

                    <TouchableOpacity
                        style={this.state.vpnState === VpnState.connected ? styles.roundActiveButton : styles.roundButton}
                        onPress={this.handleButtonPress}
                    >
                        <PowerIcon/>
                        <Text style={{ color: Colors.white, marginTop: 6 }}>
                            {this.state.vpnState !== VpnState.disconnected ? 'STOP' : 'START'}
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ color: Colors.white, marginTop: 80 }}>{this.state.vpnState !== null ? VpnState[this.state.vpnState] : 'null'}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.white }}>{this.state.vpnState === VpnState.connected ? '00:00:00' : ' '}</Text>
                </View>

                <TouchableOpacity style={styles.banner} onPress={() => this.setState({ isBoosted: !this.state.isBoosted })}>
                    {this.state.isBoosted ? (
                        <>
                            <Text style={{ fontSize: 14 }}>🚀🚀🚀</Text>
                            <Text style={{ color: Colors.green, marginTop: 6, fontWeight: 'bold' }}>Boost is active</Text>
                        </>
                    ) : (
                        <>
                            <Text style={{ color: Colors.yellow, fontWeight: 'bold' }}>ACTIVATE BOOST</Text>
                            <Text style={{ color: Colors.white, marginTop: 6 }}>Unlimited highspeed connection</Text>
                        </>
                    )}

                </TouchableOpacity>
            </LinearGradient>
        );
    }

    private handleButtonPress = () => {
        getCurrentState().then(vpnState => this.setState({ vpnState })).catch(error => console.log(error));

        switch (this.state.vpnState) {
            case VpnState.connected:
                disconnect().catch(error => console.log(error));
                break;

            case null:
            case VpnState.disconnected:
                this.connectVpn();
                break;

            case VpnState.genericError:
            default:
                break;
        }
    }

    private connectVpn = () => {
        if (this.props.route.params.server) {
            connect(
                this.props.route.params.server.address,
                this.props.route.params.server.username,
                this.props.route.params.server.password,
            ).catch(error => console.log(error));
        }
    }
}
