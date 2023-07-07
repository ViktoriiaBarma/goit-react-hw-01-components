import styled from 'styled-components';

export const Table = styled.table`
  margin: 10px auto 32px;
  padding: 16px;
  max-width: 90%;
  width: 70%;
  border-radius: 8px;
  box-shadow: rgb(255, 255, 255) -0.0625rem -0.0625rem 0.0625rem, rgb(186, 190, 204) 0.0625rem 0.0625rem 0.0625rem;
`;

export const Thead = styled.thead`
  border-radius: 8px;
  background-color: rgb(233, 237, 255);
  text-shadow: rgb(255, 255, 255) 0.0625rem 0.0625rem 0.0625rem;
  font-family: Roboto;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
        box-shadow: rgb(14, 17, 25) 0px 6px 6px -6px;
        color: rgb(255, 255, 255);
        text-shadow: rgb(64, 0, 117) 0.0625rem 0.0625rem 0.0625rem;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? '#81c4ab' : 'transparent'};
`;



export const Th = styled.th`
  padding: 0.5rem 0px 0.5rem 16px;
  text-align: left;
  color:#19039e;
  font-size:20px;

  :first-child {
    border-top-left-radius: 8px;
  }

  :last-child {
    border-top-right-radius: 8px;
  }
`;

export const Tb = styled.tbody`
  background-color: rgb(255, 255, 255);
`;

export const Td = styled.td`
  padding-left: 16px;
        border-right: 0.125rem solid rgb(233, 237, 255);
          font-size:20px;
          color:#3d44d0;


  :hover {
            background-color: rgb(233, 237, 255);
        color: rgb(64, 0, 117);
        text-shadow: rgb(255, 255, 255) 0.0625rem 0.0625rem 0.0625rem;
        box-shadow: rgb(115, 120, 175) -1px 1px, rgb(115, 120, 175) -2px 2px, rgb(115, 120, 175) -3px 3px, rgb(115, 120, 175) -4px 4px, rgb(115, 120, 175) -5px 5px, rgb(115, 120, 175) -6px 6px;
        transform: translate3d(6px, -6px, 0px);
        transition-delay: 0s;
        transition-duration: 0.4s;
        transition-property: all;
  }
`;

export const Type = styled(Td)`
  text-transform: capitalize;
  font-size:20px;
`;