import { Fragment, useState } from "react";
import './tab.module.css';
import { BackBtn } from '../../Home'


export default function TabMenu() {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
    // tabClickHandler 의 () index 값을 setActiveTab useState() 로 Props 받음
  };

  const tabContArr = [
    {
      // 탭 인덱스 배열을 삼항연산자로 체크하여
      // 1. is-active 클래스 추가
      // 클릭시 setActiveTab (후크) useState 값 전달
      tabTitle: (
        <li className={`{activeTab === 0 ? "is-active" : "" } tabName`}
          onClick={() => tabClickHandler(0)}
        > 리액트 </li>
      ),
      tabCont: (
        <div className={`{activeTxt === 0 ? "is-active" : "" }`}>
          <p>
            엘리먼트는 React 앱의 가장 작은 단위입니다.<br></br>
            엘리먼트는 화면에 표시할 내용을 기술합니다. HTML 파일 어딘가에 div 가 있다고 가정해 봅시다.<br></br>
            안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부릅니다.
            React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다.<br></br> React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있습니다.
            React 엘리먼트를 렌더링 하기 위해서는 우선 DOM 엘리먼트를 ReactDOM.createRoot()에 전달한 다음, React 엘리먼트를 root.render()에 전달해야 합니다.
          </p>
          <span>렌더링(Rendering)</span>
          <p>
            변화하는 변수 값을 화면에 보여줘야 할경우<br />
            * State가 아닌 일반 변수는 렌더링을 일으킬(trigger)
            수없음.<br />
            * 렌더링(Rendering) : 가장 최신 버전의 컴포넌트 상황을 가져오기 위해 컴포넌트를 실행하는 것.<br />
            컴포넌트는 함수, 즉 렌더링 발생 == 컴포넌트 실행 == 함수호출<br />
            함수호출 ? 컴포넌트 내부에 있는 코드들이 전부 재실행 됨.<br />
            ex)최초 앱실행, 새로고침 발생 , useState() set 값 변경시
          </p>
        </div>
      )
    },
    {
      tabTitle: (
        <li className={`{activeTab === 1 ? "is-active" : "" } tabName`}
          onClick={() => tabClickHandler(1)}
        > JSX</li>
      ),
      tabCont: (
        <div className={`{activeTxt === 1 ? "is-active" : "" }`}>
          <p>
            JSX라 하며 JavaScript를 확장한 문법입니다. UI가 어떻게 생겨야 하는지 설명하기 위해
            React와 함께 사용할 것을 권장합니다. JSX라고 하면 템플릿 언어가 떠오를 수도 있지만,
            JavaScript의 모든 기능이 포함되어 있습니다.<br></br><br></br>
            JSX란?<br></br>
            React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결된다는 사실을 받아들입니다.
            React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리합니다. 이후 섹션에서 다시 컴포넌트로 돌아오겠지만, JS에 마크업을 넣는 게 익숙해지지 않는다면 이 이야기가 확신을 줄 것입니다.<br></br><br></br>
            React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 된다고 생각합니다. 또한 React가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해줍니다.
            일단 한번 시작해보겠습니다!
          </p>
        </div>
      )
    }
  ];

  return (
    <Fragment>
      <div className="tabWrap">
        <p>TAP 메뉴 test</p>
        <ul className="tabs">
          {tabContArr.map((section, index) => {
            return section.tabTitle
          })}
        </ul>
        <div className="tabContents">
          {tabContArr[activeTab].tabCont}
        </div>
      </div>
      <BackBtn />
    </Fragment>
  )
}