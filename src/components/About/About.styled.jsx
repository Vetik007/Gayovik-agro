// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { FiArrowRight } from 'react-icons/fi';

export const About = styled.section`
  background-color: #2b4d5e;
`;

export const AboutInfoWrapper = styled.div`
  height: 568px;
`;

export const Parallax = styled.div`
  position: relative;
  width: 820px;
  height: 0;
  border-top: 133px solid #c00000;
  /* border-bottom: 72px solid #C00000; Высота трапеции */
  border-left: 0px solid transparent; /* Длина верхней стороны */
  border-right: 40px solid transparent; /* Длина верхней стороны */
  margin-bottom: 24px;
`;

export const AboutTitle = styled.h2`
  position: absolute;
  /* top: -50px;
  left: 24px; */
  top: -110.5px;
  left: 50%;
  transform: translate(-50%, 0);

  font-family: Oswald;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: white;
`;
export const AboutText = styled.p`
  width: 909px;
  margin-bottom: 56px;

  font-family: Open Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutInfoList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const AboutInfoItem = styled.li`
  position: relative;
  height: 48px;
`;

export const AboutInfoIcon = styled.svg`
  position: absolute;
  /* top: -50%;
  left: -50%;
  transform: translate(-50%, -50%); */
  /* top: 0; */
  /* padding: 24px; */
  /* background-color: #c00000; */
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  top: -48px;
  padding: 24px;
  background-color: #c00000;
`;

export const AboutInfoTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 56px;
  transform: translate(0, -50%);

  font-family: Oswald;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

export const ParallaxInfo = styled.div`
  /* position: relative; */
  width: 272px;
  height: 0;
  border-top: 48px solid #355e73;
  /* border-bottom: 72px solid #C00000; Высота трапеции */
  border-left: 0px solid transparent; /* Длина верхней стороны */
  border-right: 20px solid transparent; /* Длина верхней стороны */
  margin-bottom: 16px;
`;

export const AboutInfoText = styled.p`
  width: 292px;

  font-family: Open Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Av = styled.div``;
