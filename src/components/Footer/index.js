import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../assets/froware-logo.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';
import Twitter from '../../assets/twitter.svg';

const Container = styled.footer`
  background-color: #000;
  color: #fff;
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 173px;
`;

const StyledLogo = styled.img`
  fill: #fff;
`;

const SocialMedias = styled.div`
  display: inline-block;
  a {
    margin-right: 20px;
  }
`;

const ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

const Footer = ({ content: { social, blurb } }) => (
  <Container>
    <Test>
      <StyledLogo src={Logo} alt='Froware Logo' />
      <SocialMedias>
        {Object.entries(social).map(([key, value]) => (
          <a key={key} href={`https://${key}.com/${value}`}>
            <img src={ICONS[key]} alt={`${value}-${key}`} />
          </a>
        ))}
      </SocialMedias>
      <span>{blurb}</span>
    </Test>
  </Container>
);

export default Footer;
