import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { SvgIcon, SvgIconProps } from '@mui/material';
const loadKeyFrames = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const CircleOne = styled.circle`
  animation: ${loadKeyFrames} 1s infinite;
`;
const CircleTwo = styled.circle`
  animation: ${loadKeyFrames} 1s 0.2s infinite;
`;
const CircleThree = styled.circle`
  animation: ${loadKeyFrames} 1s 0.4s infinite;
`;
export const DotLoader = (props: SvgIconProps) => {
  // console.log(props.sizw);

  return (
    <SvgIcon {...props} viewBox="0 0 132 58" version="1.1">
      <defs></defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="currentColor">
          <CircleOne cx="25" cy="30" r="10"></CircleOne>
          <CircleTwo cx="65" cy="30" r="10"></CircleTwo>
          <CircleThree cx="105" cy="30" r="10"></CircleThree>
        </g>
      </g>
    </SvgIcon>
  );
};
