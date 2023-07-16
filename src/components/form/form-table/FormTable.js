import React from "react";
import {
  TableCell,
  TableHeader,
  TableRow,
  TableWrapper,
  Wrapper,
} from "./FormTable.styles";
import { TableInput } from "./FormTable.styles";
import { initTableByEdit } from "../../../utils/initTableByEdit";

export const FormTable = ({ tableDetails }) => {
  const { titles, rows } = tableDetails;

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
          {rows?.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(row).map((prop, colIndex) => (
                <TableCell isFirst={colIndex === 0} key={prop}>
                  {row[prop]?.input ? (
                    <TableInput
                      key={prop}
                      type={row[prop].input.type}
                      name={row[prop].input.name}
                      value={row[prop].value}
                      onChange={initTableByEdit}
                    />
                  ) : (
                    <>{row[prop].value}</>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
    </Wrapper>
  );
};
