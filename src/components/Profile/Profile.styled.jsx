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

  border-radius: 20px;
  background-color: #81c4ab;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 4px;
  margin-top: 40px;
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
  color: #19039e;
  font-size: 36px;
  font-weight: 500;
  margin: 0 auto;
`;

export const Tag = styled(Info)`
  color: #3d44d0;
  font-size: 16px;
`;

export const Location = styled(Info)`
  color: #257bab;
  font-size: 20px;
  margin: 10px auto;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 100%;
  margin: 10px auto;
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
    border-radius: 15px;
  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: #2f0681;
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-size: 18px;
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: blue;
  text-shadow: 1px 1px 1px #fff;
`;
