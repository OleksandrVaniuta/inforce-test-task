import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10000000000000;
  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  width: 400px;

  position: absolute;
  top: 5%;
  left: 50%;

  transform: translateX(-50%);
  border-radius: 8px;
  background-color: #ffffff;

  z-index: 3;
`;

export const ModalHeader = styled.div`
  wodth: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.space[4] + 'px'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
`;

export const CloseModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  top: 10px;
  right: 10px;
`;

export const ModalContent = styled.div`
  padding: 20px;
`;
