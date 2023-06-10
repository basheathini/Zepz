import * as React from 'react';
import {View} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
  hasBackgroundColor: boolean;
}

const DownArrow = (props: Props) => (
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
      d="M29.6143 22.4449C30.4382 21.5427 29.8547 20 28.6896 20H19.3104C18.1453 20 17.5618 21.5427 18.3857 22.4449L23.0752 27.5805C23.586 28.1398 24.414 28.1398 24.9248 27.5805L29.6143 22.4449Z"
      fill={props.color}
    />
  </Svg>
);

export default DownArrow;
