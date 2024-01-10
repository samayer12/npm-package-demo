import React from 'react';
import styled from 'styled-components';

const buttonStyle = styled.div`
  padding: 20px;
  color: blue;
`;

export interface MyButtonComponentProps {
  text?: string;
}

export const MyButtonComponent: React.FC<MyButtonComponentProps> = ({ text }) => (
  <Wrapper>{text ? text : 'This is an imported component'}</Wrapper>
);
