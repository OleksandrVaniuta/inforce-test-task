import styled from '@emotion/styled';

export const ConfirmationButton = styled.button`
  display: block;
  padding: ${({ theme }) => theme.space[3] + 'px'}
    ${({ theme }) => theme.space[4] + 'px'};
  border-radius: ${({ theme }) => theme.space[2] + 'px'};

  color: ${({ theme }) => theme.colors.maimWhite};
  font-size: ${({ theme }) => theme.fontSizes[3] + 'px'};

  background-color: ${({ theme }) => theme.colors.blue};

  transition: background 0.5s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;
