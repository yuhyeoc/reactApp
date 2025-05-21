import { React } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// style-components 내장된 ThemeProvider 컴포넌트 import 하여 스타일 적용할 상위 컴포넌트에 위치
import { BiAlignRight } from 'react-icons/bi';
import theme from '../styles/Tagged';
import { BackBtn } from '../../Home';
// 테마 스타일들을 객체화 하여 저장한 theme 개체 import

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  ${({ theme }) => theme.commonStyle.flexCenterColumn};
  ${({ theme }) => theme.divTxtStyle.textAlignR};
`;
// 객체 백틱 내부에 불러오기 : theme 객체를 불러와 화살표 함수 내부 인자값으로 넣고 props?
// 함수나 객체명만 불러올 경우 함수 자체가 불러오므로 백틱 string으로 스타일을 저장
// ${({ obj }) => props }

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeObj.title};
  color: ${({ theme }) => theme.colors.black};
`;

const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizeObj.subtitle};
  color: ${({ theme }) => theme.colors.grey};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizeObj.paragraph};
  color: ${({ theme }) => theme.colors.white};
`;

const Box = styled.section`
  background: ${(props) => props.color || 'grey'};
  padding: 1rem;
  display: flex;
  ${
    '' /* 기본적으로 가로 크기 1024px 에 가운데 정렬을 하고 가로크기가 작아짐에 따라 크기를 줄이고 
  768px 미만이 되면 꽊 채웁니다. */
  }
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuBar = styled.a`
  display: flex;
  width: 48px;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  ${
    '' /* position: absolute;
  right: 32px;
  height: 96px; */
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledObj = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container>
          <Title>Styled-Components Provider 알아보기</Title>
          <MenuBar>
            <BiAlignRight />
          </MenuBar>
          <Subtitle>
            ThemeProvider 를 사용하여 자주사용하는 테마를 객체화
          </Subtitle>
          <Paragraph>
            프로젝트의 폰트사이즈 , 테마컬러 등 반복적으로 사용되는 스타일을
            객체에 담아 재사용함 전체 박스사이즈, flex 레이아웃을 한번만 객체에
            넣어 쉽게 불러올 수 있음
          </Paragraph>
        </Container>
      </Box>
      <BackBtn />
    </ThemeProvider>
  );
};
export default StyledObj;
