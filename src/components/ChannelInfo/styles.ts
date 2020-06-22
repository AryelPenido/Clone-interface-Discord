import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
grid-area: CI;
display: flex;
align-items: center;
padding: 0 17px;
background-color: var(--primary);
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
z-index: 2;

`;
export const Title = styled.h1`
  margin-left: 9px;

  font-weight: bold;
  font-size: 16px;
 
  color: var(--white);
  `;

export const HIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;
export const Description = styled.span`

font-size: 15px;
color: var(--gray);

`;

export const Bar = styled.div`

width: 1px;
height: 24px;

background-color: var(--white);
opacity: 0.2;
margin: 0 13px;
`;
