import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const Title = styled.h1`
  display: inline-block,
  border-bottom: 1px solid;
`

const MyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ContentTitle = styled.h3`
  margin-bottom: ${ rhythm(1 / 4) };
`

const SpanDate = styled.span`
  color: #BBB;
`

export default ({ data }) => {
  return (
    <div>
      <Title>
        Amazing Pandas Eating Things
      </Title>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <MyLink
            to={node.fields.slug}
          >

            <ContentTitle>
              {node.frontmatter.title}{" "}
              <SpanDate>— {node.frontmatter.date}</SpanDate>
            </ContentTitle>
            <p>
              {node.excerpt}
            </p>
          </MyLink>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`