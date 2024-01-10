import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  color: blue;
`;

export interface ImportedComponentProps {
  text?: string;
}

export const ImportedComponent: React.FC<ImportedComponentProps> = ({ text }) => (
  <Wrapper>{text ? text : 'Imported Component'}</Wrapper>
);
