import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from "../Colors";

export default class ProfileIcon extends React.Component {
    render() {
        return (
            <Svg
                width={25}
                height={25}
                viewBox="0 0 1792 1792"
            >
                <Path
                    fill={Colors.greyDark}
                    d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"
                />
            </Svg>
        );
    }
}
