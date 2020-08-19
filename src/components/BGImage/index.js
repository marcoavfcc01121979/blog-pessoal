import React from 'react'

//styles
import { Wrapper, FakeBGImage, Content } from './styles'

const BGImage = ({ fluid, title, className, children }) => (
  <Wrapper>
    <FakeBGImage fluid={fluid} title={title} />
    <Content className={className}>{children}</Content>
  </Wrapper>
)

export default BGImage;