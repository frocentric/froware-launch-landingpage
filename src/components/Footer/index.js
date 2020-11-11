import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Logo';
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

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 173px;
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
    <InnerWrapper>
      <Logo fill='#fff' />
      <SocialMedias>
        {Object.entries(social).map(([key, value]) => (
          <a key={key} href={`https://${key}.com/${value}`}>
            <img src={ICONS[key]} alt={`${value}-${key}`} />
          </a>
        ))}
      </SocialMedias>
      <span>{blurb}</span>
    </InnerWrapper>
  </Container>
);

Footer.propTypes = {
  content: PropTypes.shape({
    social: PropTypes.shape({
      facebook: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
    }),
    blurb: PropTypes.string.isRequired,
  }),
};

export default Footer;
