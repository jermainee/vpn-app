import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from "../Colors";

export default class DealIcon extends React.Component {
    render() {
        return (
            <Svg
                width={25}
                height={25}
                viewBox="0 0 1792 1792"
            >
                <Path
                    fill={Colors.greyDark}
                    d="M1408 1280q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM640 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm1024 768q0 159-112.5 271.5T1280 1664t-271.5-112.5T896 1280t112.5-271.5T1280 896t271.5 112.5T1664 1280zm-96-1088q0 20-13 38L499 1638q-19 26-51 26H288q-26 0-45-19t-19-45q0-20 13-38L1293 154q19-26 51-26h160q26 0 45 19t19 45zM896 512q0 159-112.5 271.5T512 896 240.5 783.5 128 512t112.5-271.5T512 128t271.5 112.5T896 512z"
                />
            </Svg>
        );
    }
}
