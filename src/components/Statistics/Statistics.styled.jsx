import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 10px auto;
  padding: 0 10px 10px;
  max-width: 100%;
  width: 360px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 20px;
  background: #81c4ab;
`;

export const Title = styled.h2`
  padding: 4px;

  border-bottom: 1px solid #d3d5e3;
  color: #19039e;
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
  font-size:  16px;

  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  border-radius:10px;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 1px #000;


  :first-child {
    border-bottom-left-radius: 0.5rem;
  }

  :last-child {
    border-bottom-right-radius: 0.5rem;
  }

  background-color: pink;
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
`;