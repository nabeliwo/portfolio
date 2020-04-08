import React from 'react'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
// interface IndexPageProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//       }
//     }
//   }
// }

const IndexPage = () => <div>hello, world</div>

export default IndexPage

// export default class extends React.Component<IndexPageProps, {}> {
//   constructor(props: IndexPageProps, context: any) {
//     super(props, context)
//   }
//   public render() {
//     return (
//       <div>
//         <h1>Hi people</h1>
//         <p>
//           Welcome to your new{' '}
//           <strong>{this.props.data.site.siteMetadata.title}</strong> site.
//         </p>
//         <p>Now go build something great.</p>
//         <Link to="/page-2/">Go to page 2</Link>
//       </div>
//     )
//   }
// }
