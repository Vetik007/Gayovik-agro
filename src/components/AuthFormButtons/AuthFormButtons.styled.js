import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  background: #ebecf0;
  display: flex;
  /* padding: 12px 40px; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: #ae1100;
  /* color: #61677c; */

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;

  font-weight: bold;
  line-height: 18px;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #fff;
  /* margin-bottom: 12px; */
  box-shadow:
    -5px -5px 20px #fff,
    5px 5px 20px #babecc;

  /* &:hover {
    background-color: var(--light-accent-color);
  } */

  &:active {
    /* transform: scale(0.95); */

    box-shadow:
      inset 1px 1px 2px #babecc,
      inset -1px -1px 2px #fff;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
`;
