import * as React from 'react';
import {View} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
  hasBackgroundColor: boolean;
}

const UpArrow = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 48 48"
    fill="none"
    {...props}>
    {props.hasBackgroundColor ? (
      <Rect width={48} height={48} rx={15} fill="#ECF0F4" />
    ) : (
      <View />
    )}
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.3857 24.5551C17.5618 25.4573 18.1453 27 19.3104 27L28.6896 27C29.8547 27 30.4382 25.4573 29.6143 24.5551L24.9248 19.4195C24.414 18.8602 23.586 18.8602 23.0752 19.4195L18.3857 24.5551Z"
      fill={props.color}
    />
  </Svg>
);

export default UpArrow;
