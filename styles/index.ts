import styled, { css } from 'styled-components';

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Header = styled.div`
    background-color: var(--gray-50);
    height: 10rem;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 5rem;
  background: var(--yellow-500);
  border-radius: 0.8rem;
  padding: 1rem;
`;

export const DropContainer = styled.div < DropContainerProps > `
  border: 1px dashed #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

interface UploadMessageProps {
  type: 'default' | 'error' | 'success';
}

const messageColors = {
  default: '#000',
  error: '#e57878',
  success: '#78e5d5',
};

export const UploadMessage = styled.p<UploadMessageProps>`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;