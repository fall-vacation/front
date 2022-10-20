import * as S from '../../styles/common/style'
type AppWrapProps = {
  children: React.ReactNode
}

const Wrap = ({ children }: AppWrapProps) => {
  return (
    <>
      <S.WrapContainer>{children}</S.WrapContainer>
    </>
  )
}

export default Wrap
