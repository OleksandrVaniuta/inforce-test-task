import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ItemWrapper = styled.li`
  width: 274px;
  position: relative;

  & img {
    width: 274;
    height: 268px;
    object-fit: cover;
    object-position: center;
    border-radius: 14px;
  }
`;

export const ItemtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
`;

export const Itemtitle = styled.h3`
  &:first-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[5]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};

  & span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 8px;
  padding-bottom: 28px;
`;

export const Descr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 37px;
`;

export const LearnMoreBtn = styled(NavLink)`
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  background-color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  transition: background-color 0.5s ease-in-out;
  color: ${({ theme }) => theme.colors.maimWhite};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const DltBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
  background-color: ${({ theme }) => theme.colors.grey};
  transition: background-color 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
