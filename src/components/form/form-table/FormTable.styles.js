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
  text-align: right;
  background-color: white;
`;

export const TableRow = styled.tr`
  background-color: #f2f2f2;
  border-bottom: 9px solid white;
`;

export const TableCell = styled.td`
  padding-right: ${(props) => (props.isFirst ? "29px" : "0px")};
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const TableInput = styled(Field)`
  background: transparent;
    border: none;
  border-bottom: 1px solid #8c8c8c;
  color: #000;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;