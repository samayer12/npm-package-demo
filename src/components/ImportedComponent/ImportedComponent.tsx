import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  color: red;
`;

export interface ImportedComponentProps {
  text?: string;
}

export const ImportedComponent: React.FC<ImportedComponentProps> = ({ text }) => (
  <Wrapper>{text ? text : 'Revised Imported Component'}</Wrapper>
);
