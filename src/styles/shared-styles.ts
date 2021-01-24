import styled from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
`@media (max-width: ${maxWidth}px)`;

const media = {
custom: customMediaQuery,
desktop: customMediaQuery(922),
tablet: customMediaQuery(768),
phone: customMediaQuery(576),
};

const PageDiv = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 1440px;
`;

export {
  media,
  PageDiv
}