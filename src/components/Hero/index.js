import React from 'react'
import { Link } from 'gatsby'
// Component
import BGImage from 'components/BGImage'
// Hooks
import { UseHeroQuery } from '../../hooks/useHeroQuery'
// Styles
import { HeroWrapper, TextWrapper } from './styles'


const Hero = () => {
  const { 
    heroImage, 
    heroImageText, 
    heroImageBtnText, 
    heroImageBtnLink, 
  } = UseHeroQuery();
  console.log(heroImage)

  return(
    <HeroWrapper>
      <BGImage title="heroImage" fluid={heroImage.childImageSharp.fluid} >
        <TextWrapper>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  )
}

export default Hero;