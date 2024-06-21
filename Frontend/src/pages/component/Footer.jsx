import React from 'react';
import styled from 'styled-components';

// Styled components for the footer
const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #1c2331;
  color: white;
  font-family: Arial, sans-serif;
`;

const Container = styled.div`
  max-width: 100%; /* Ensure container stretches to full width */
  margin: 0 auto;
  padding: 40px 20px; /* Adjust padding as needed */
  @media (min-width: 1100px) {
    max-width: 1100px; /* Limit container to 1100px width */
  }
`;

const FooterTop = styled.div`
  max-width: 1100px; /* Limit width to 1100px */
  margin: 0 auto; /* Center align */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const IconLink = styled.a`
  color: white;
  font-size: 20px;
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

const FooterMain = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const SectionTitle = styled.h5`
  color: #7c4dff;
  margin-bottom: 10px;
`;

const SectionLink = styled.a`
  color: white;
  display: block;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  text-align: center;
`;

const CopyrightText = styled.p`
  margin: 0;
  color: white;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <Logo>Your Company</Logo>
          <SocialIcons>
            <IconLink href="#">
              <i className="fab fa-facebook-f"></i>
            </IconLink>
            <IconLink href="#">
              <i className="fab fa-twitter"></i>
            </IconLink>
            <IconLink href="#">
              <i className="fab fa-google"></i>
            </IconLink>
            <IconLink href="#">
              <i className="fab fa-instagram"></i>
            </IconLink>
          </SocialIcons>
        </FooterTop>
        <FooterMain>
          <div>
            <SectionTitle>Company</SectionTitle>
            <SectionLink href="#">About Us</SectionLink>
            <SectionLink href="#">Careers</SectionLink>
            <SectionLink href="#">Press</SectionLink>
          </div>
          <div>
            <SectionTitle>Products</SectionTitle>
            <SectionLink href="#">Product 1</SectionLink>
            <SectionLink href="#">Product 2</SectionLink>
            <SectionLink href="#">Product 3</SectionLink>
          </div>
          <div>
            <SectionTitle>Services</SectionTitle>
            <SectionLink href="#">Service 1</SectionLink>
            <SectionLink href="#">Service 2</SectionLink>
            <SectionLink href="#">Service 3</SectionLink>
          </div>
          <div>
            <SectionTitle>Support</SectionTitle>
            <SectionLink href="#">FAQ</SectionLink>
            <SectionLink href="#">Contact Us</SectionLink>
            <SectionLink href="#">Privacy Policy</SectionLink>
          </div>
        </FooterMain>
        <FooterBottom>
          <CopyrightText>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </CopyrightText>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
