import dummy from '../../db/newDummy.json';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BackBtn } from '../../Home';

const TableStyle = styled.table`
  border: 1px solid #eaeaea;
  width: 50%;
  margin: 0 auto;
`;
const TbodyStyle = styled.tbody`
  background: #d9ca9c;
`;
const TableTr = styled.tr`
  border: 1px solid #eaeaea;
`;
const TableTd = styled.td`
  border: 1px solid #eaeaea;
`;

const TableTheme = {
  TableStyle,
  TbodyStyle,
  TableTr,
  TableTd,
};

export default function DummyList() {
  console.log(dummy);
  return (
    <>
      <div>
        <ul>
          {dummy.days.map((day) => (
            <li key={day.id}>Day {day.day}</li>
          ))}
        </ul>
      </div>
      <TableStyle theme={TableTheme}>
        <TbodyStyle>
          {dummy.words.map((word) => (
            <TableTr>
              <TableTd>
                {word.eng}
                {word.kor}
              </TableTd>
            </TableTr>
          ))}
        </TbodyStyle>
      </TableStyle>
      <p>* console의 object를 확인해주세요.</p>
      <BackBtn />
    </>
  );
}
