import React from 'react'
// import { Button, H1 } from 'ui/elements'
import { Button } from 'antd'

const TopArticles = () => {
  return (
    <React.Fragment>
      {/*
      <H1>Home Page</H1>
      <Button submit onClick={() => onClickButton('submit clicked')}>Submit Button</Button>
      <Button>Normal Button</Button>
      <Button disabled>Normal Button</Button>
      <Button submit disabled>Submit Button</Button>
      <Button submit small>Small Button</Button>
      */}
      <Button type="primary">Submit</Button>
    </React.Fragment>
  )
}

export default TopArticles
