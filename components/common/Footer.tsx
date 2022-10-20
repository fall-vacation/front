import Wrap from './Wrap'
import * as S from '../../styles/common/style'
import Link from 'next/link'
const FaqList = [
  'Help',
  'My Account',
  'Shipping',
  'FAQ',
  'Shop',
  'Community',
  'Contact Us',
]
type Props = {
  color: string
  link: string
}
const FaqListWrap = ({ color, link }: Props) => {
  return (
    <S.FooterList>
      {FaqList.map((text, index) => (
        <S.FaqList key={index} color={color}>
          <Link href={link}>{text}</Link>
        </S.FaqList>
      ))}
    </S.FooterList>
  )
}

const Footer = () => {
  return (
    <>
      <S.FooterContainer>
        <S.Contents>
          <S.FooterLogoWrap>
            <h1>logo</h1>
            <ul>
              <li>
                <span>circle</span>
              </li>
              <li>
                <span>circle</span>
              </li>
              <li>
                <span>circle</span>
              </li>
            </ul>
          </S.FooterLogoWrap>
          <FaqListWrap color="red" link="./taewans-farm" />
        </S.Contents>
      </S.FooterContainer>
    </>
  )
}

export default Footer
