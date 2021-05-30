import React from 'react'
import Header from './Header'
const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container my-4">
          <div className="my-2">{children}</div>
      </div>
    </div>
  )
}

export default PageLayout
