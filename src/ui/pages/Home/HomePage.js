import React from 'react'
import PageLayout from 'ui/modules/home/PageLayout'
import LoadInit from './LoadInit'
import TopArticles from './TopArticles'

class HomePage extends React.PureComponent {
  render() {
    return (
      <PageLayout>
        <LoadInit />
        <TopArticles />
      </PageLayout>
    )
  }
}

export default HomePage
