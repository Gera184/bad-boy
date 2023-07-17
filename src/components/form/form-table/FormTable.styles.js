import styled from "styled-components";
import { Field } from "formik";

export const Wrapper = styled.div`
  padding-top: 60px;
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background-color: white;
`;

export const TableRow = styled.tr`
  background-color: #f2f2f2;
  border-bottom: 9px solid white;
`;

export const TableCell = styled.td`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  height: 26px;
`;

export const TableInput = styled(Field)`
  :read-only {
    background: grey;
  }
  background: transparent;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
