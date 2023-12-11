// import styled from '@emotion/styled';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 320px;
//   padding-top: 350px;
//   /* margin: 0 auto; */
// `;

// export const Title = styled.h1`
//   margin: 0;
//   margin-right: 10px;
//   color: #ffffff;
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
// export const StyledImage = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: cover;
// `;

// =================================================

// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* padding-top: 350px; */
  /* width: 330px; */
  height: 500px;
  padding: 50px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

export const TypeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;

  /* list-style-type: disclosure-closed; */
  /* list-style-type: space-counter; */

  /* color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`;

export const TypeItem = styled.li`
  font-size: 20px;
  list-style-type: disclosure-closed;
  color: black;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;

  cursor: pointer;
`;

// export const StyledLink = styled(Link)`
//   padding: 8px 16px;
//   color: #ffffff; /* White text color */
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
//   transition:
//     color 0.3s,
//     text-shadow 0.3s;
//   display: block;
//   &:hover,
//   &:focus {
//     color: #00baff; /* Blue text color on hover/focus */
//     text-shadow:
//       0 0 5px #00baff,
//       0 0 10px #00baff,
//       0 0 20px #00baff,
//       0 0 40px #00baff,
//       0 0 80px #00baff;
//   }
// `;
