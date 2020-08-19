import { useStaticQuery, graphql } from 'gatsby'


export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return data.site.siteMetadata;
}