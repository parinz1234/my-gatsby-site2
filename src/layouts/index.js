import React from "react";

import styled from 'styled-components'
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";

const Div = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`
const Title = styled.h3`
  margin-bottom: ${rhythm(2)};
  display: inline-block;
  font-style: normal;

`
const MyLink = styled(Link)`
  float: right;
`

export default ({ children, data }) => (
  <Div>
    <Link to={`/`}>
      <Title>{data.site.siteMetadata.title}</Title>
    </Link>
    <MyLink  to={`/about/`}>
      About
    </MyLink>
    { children() }
  </Div>
);



export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`