import styled from 'styled-components'
import { fadeIn } from '../../styles/fadeIn'

export const Article = styled.article`
  min-height: 200px;
  margin: 10px 5px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
`

export const Img = styled.img`
  ${fadeIn()}
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
