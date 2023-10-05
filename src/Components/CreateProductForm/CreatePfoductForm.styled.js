import styled from '@emotion/styled';

import { Field } from 'formik';

export const InputItem = styled.li`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const UserInputBtn = styled.button`
  display: block;
  padding: ${({ theme }) => theme.space[3] + 'px'}
    ${({ theme }) => theme.space[4] + 'px'};

  border-radius: ${({ theme }) => theme.space[2] + 'px'};
  font-size: ${({ theme }) => theme.fontSizes[3] + 'px'};
  color: ${({ theme }) => theme.colors.maimWhite};

  background-color: ${({ theme }) => theme.colors.blue};

  transition: background 0.5s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;

export const UploadFile = styled(Field)`
  margin-top: 40px;
`;
