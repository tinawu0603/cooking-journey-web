import styled from 'styled-components';
import { media } from './shared-styles';

/*
 * WORD STYLES
 */
const H1 = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-size: 62px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 140%;
  ${media.tablet} {
    font-size: 50px;
  }
`;

const H2 = styled.h2`
  font-family: "Libre Baskerville", serif;
  font-size: 36px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 140%;
  ${media.tablet} {
    font-size: 32px;
  }
`;

const H3 = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 140%;
  ${media.tablet} {
    font-size: 24px;
  }
`;

const P1 = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 140%;
  ${media.tablet} {
    font-size: 16px;
  }
`;

export {
  H1,
  H2,
  H3,
  P1
}
