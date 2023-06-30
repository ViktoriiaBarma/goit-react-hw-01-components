import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 4px;

  max-width: 100%;
  width: 360px;
  
  border-radius: 1px solid #000;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: red;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 4px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const Info = styled.p`
  color: blue;
 
`;

export const Name = styled(Info)`
  color: black;
 
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color:red;
`;

export const Location = styled(Info)`
  color: yellow;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 100%;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  :not(:last-child){
  border-right: 1px dotted blue;

  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: red;
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: blue;
  text-shadow: 1px 1px 1px #fff;
  
`;