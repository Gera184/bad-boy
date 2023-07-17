import React from "react";
import {
  TableCell,
  TableHeader,
  TableRow,
  TableWrapper,
  Wrapper,
} from "./FormTable.styles";
import { TableInput } from "./FormTable.styles";

export const FormTable = ({ tableDetails, onChange }) => {
  let { titles, rows } = tableDetails;

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
          {rows?.length === 0 ? (
            <TableRow>
              <TableCell colSpan="100%" />
            </TableRow>
          ) : (
            rows?.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.keys(row).map((prop, colIndex) => (
                  <TableCell isFirst={colIndex === 0} key={prop}>
                    {row[prop]?.input ? (
                      <TableInput
                        dir="ltr"
                        key={prop}
                        type={row[prop].input.type}
                        name={row[prop].input.name}
                        value={row[prop].value}
                        onChange={onChange}
                        readOnly={row[prop].input.readonly ? "readonly" : null}
                        min={row[prop].input.min}
                        max={row[prop].input.max}
                      />
                    ) : (
                      <>{row[prop].value}</>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </tbody>
      </TableWrapper>
    </Wrapper>
  );
};
