import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface Props {
  color?: string;
}

const ContentIcon = ({ color, ...rest }: Props) => {
  return (
    <Svg width={39} height={36} viewBox='0 0 39 36' fill='none' {...rest}>
      <Rect x={10.6733} y={1.13593} width={6.88151} height={7.143} rx={1.00336} stroke={color} strokeWidth={2.00672} />
      <Rect x={10.6733} y={11.7211} width={6.88151} height={7.143} rx={1.00336} stroke={color} strokeWidth={2.00672} />
      <Rect x={21.4448} y={11.7211} width={6.88151} height={7.143} rx={1.00336} stroke={color} strokeWidth={2.00672} />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.237 1.771a.823.823 0 00-.823.823V4.23h-1.638a.82.82 0 000 1.638h1.638V7.5a.823.823 0 101.647 0V5.867h1.63a.82.82 0 000-1.638h-1.63V2.594a.823.823 0 00-.824-.823z'
        fill={color}
      />
      <Path
        d='M1.992 30.667c0 .592.132 1.112.396 1.56a2.84 2.84 0 001.044 1.044c.44.24.916.36 1.428.36.592 0 1.104-.112 1.536-.336a3.58 3.58 0 001.092-.864v1.692a3.79 3.79 0 01-1.14.66c-.408.152-.92.228-1.536.228a4.64 4.64 0 01-1.716-.312 4.389 4.389 0 01-1.392-.9c-.392-.384-.7-.84-.924-1.368a4.677 4.677 0 01-.324-1.764c0-.64.108-1.224.324-1.752.224-.536.532-.996.924-1.38.4-.384.864-.68 1.392-.888a4.488 4.488 0 011.716-.324c.616 0 1.128.076 1.536.228a3.79 3.79 0 011.14.66v1.692a3.433 3.433 0 00-1.092-.852c-.432-.232-.944-.348-1.536-.348a2.86 2.86 0 00-1.428.372 2.75 2.75 0 00-1.044 1.032c-.264.44-.396.96-.396 1.56zm6.353 1.44c0-.568.128-1.068.384-1.5.264-.432.62-.768 1.068-1.008a3.137 3.137 0 011.524-.372c.568 0 1.076.124 1.524.372.448.24.8.576 1.056 1.008.264.432.396.932.396 1.5 0 .56-.132 1.06-.396 1.5a2.754 2.754 0 01-1.056 1.02c-.448.24-.956.36-1.524.36-.56 0-1.068-.12-1.524-.36a2.843 2.843 0 01-1.068-1.02 2.927 2.927 0 01-.384-1.5zm1.332 0c0 .512.156.932.468 1.26.32.32.712.48 1.176.48.472 0 .864-.16 1.176-.48.312-.328.468-.748.468-1.26 0-.52-.156-.94-.468-1.26-.312-.32-.704-.48-1.176-.48a1.6 1.6 0 00-1.176.48c-.312.32-.468.74-.468 1.26zm9.042-.6c0-.824-.34-1.236-1.02-1.236-.368 0-.668.112-.9.336-.224.224-.336.524-.336.9v3.36h-1.296v-5.52h1.296v.852c.352-.648.908-.972 1.668-.972.624 0 1.1.192 1.428.576.328.376.492.896.492 1.56v3.504h-1.332v-3.36zm1.859-2.16h.924v-1.92h1.284v1.92h.924v1.14h-.924v4.38h-1.284v-4.38h-.924v-1.14zm6.066 5.64c-.568 0-1.064-.12-1.488-.36a2.487 2.487 0 01-.984-1.008c-.233-.432-.349-.936-.349-1.512 0-.584.116-1.088.349-1.512.24-.432.575-.768 1.008-1.008.431-.24.94-.36 1.523-.36.873 0 1.549.252 2.029.756.488.496.732 1.184.732 2.064 0 .072-.005.144-.012.216v.144h-4.297c.048.48.204.852.468 1.116.272.264.633.396 1.08.396.704 0 1.233-.292 1.585-.876l1.128.444c-.576 1-1.5 1.5-2.773 1.5zm.048-4.776c-.84 0-1.34.432-1.5 1.296h2.855c-.024-.392-.16-.704-.407-.936-.248-.24-.564-.36-.948-.36zm7.2 1.296c0-.824-.34-1.236-1.02-1.236-.367 0-.667.112-.9.336-.224.224-.335.524-.335.9v3.36H30.34v-5.52h1.297v.852c.351-.648.907-.972 1.667-.972.624 0 1.1.192 1.428.576.328.376.492.896.492 1.56v3.504h-1.331v-3.36zm1.86-2.16h.924v-1.92h1.284v1.92h.924v1.14h-.924v4.38h-1.284v-4.38h-.924v-1.14z'
        fill={color}
      />
    </Svg>
  );
};

export default ContentIcon;
