import React from "react";
import {
  TableCell,
  TableHeader,
  TableRow,
  TableWrapper,
  Wrapper,
} from "./FormTable.styles";

export const FormTable = ({ tableDetails }) => {
  const { titles, values } = tableDetails;

  return (
    <Wrapper>
      <TableWrapper>
        <thead>
          <TableRow>
            {titles?.map((title, index) => (
              <TableHeader key={index}>{title}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {values?.map((value, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(value).map((key, colIndex) => (
                <TableCell isFirst={colIndex === 0} key={key}>
                  {value[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
    </Wrapper>
  );
};
