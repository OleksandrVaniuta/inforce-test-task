import styled from '@emotion/styled';

import { Field } from 'formik';

export const UserInputWrapper = styled.div`
  position: relative;
`;

export const UserInputTitle = styled.h3`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.grey};
`;

export const UserInput = styled(Field)`
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  padding: 6px 12px;
  margin-top: 6px;
  border: 1px solid
    ${({ theme, errors }) => (errors ? theme.colors.red : theme.colors.blue)};
  outline: none;
  &:focus {
    outline: 2px solid
      ${({ theme, errors }) => (errors ? theme.colors.red : theme.colors.blue)};
  }
  border-radius: 4px;
  width: 100%;
`;

export const UserInputValidateMsg = styled.div`
  color: #ff0000;
`;

export const ErrorMsg = styled.b`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  bottom: -20px;
  left: 10px;
`;
