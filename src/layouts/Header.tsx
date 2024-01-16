import React from 'react';
import styled from 'styled-components';
import { CustomLink } from '../styles/global';

const Header = ({ title, siteUrl }: { title: string; siteUrl: string }) => {
  return (
    <StyledHeader>
      <CustomLink to={`${siteUrl}`}>
        <h1>{title}</h1>
      </CustomLink>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.5rem 1.8rem;
  border-bottom: 1px solid #f0f0f2;
  font-size: 1.125rem;
  font-weight: 700;
`;
