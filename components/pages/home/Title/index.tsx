import { useState, useEffect } from 'react'
import Zoom from '@/components/ui/icon/zoom'
import * as S from './style'

const Title = () => {
  const [title, setTitle] = useState('작물명을 입력해주세요.')
  return (
    <S.ContainerWrap>
      <S.ContainerBox>
        <S.Slogan>
          사람과 삶,
          <br />
          공간에 대한
          <br />
          깊이있는 고민을 통해
          <br /> <span>자연과 미래가 융합된 어쩌고~~ 블라블라</span>
        </S.Slogan>
        <S.InputBox>
          <div className="input-wrap">
            <input
              type="text"
              placeholder={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value)
              }}
            />
          </div>
          <S.ZoomBox>
            <Zoom />
          </S.ZoomBox>
        </S.InputBox>
      </S.ContainerBox>
    </S.ContainerWrap>
  )
}

export default Title
