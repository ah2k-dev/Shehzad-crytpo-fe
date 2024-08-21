import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  cn,
} from "@nextui-org/react";
import React from "react";

const GeneralTable = ({ columns, rows }) => {
  return (
    <div>
      <Table
        aria-label="Example table with dynamic content"
        className="bg-slate-100 rounded-md overflow-y-auto h-[27rem]"
      >
        <TableHeader className="bg-blackcurrent-500">
          {columns?.map((column) => (
            <TableColumn
              key={column.key}
              className={cn(
                "bg-blackcurrent-500 text-white capitalize ",
                // column?.key === "action" ||column?.key === "sno"
                //   && "w-10"
                  
              )}
              align={
                column?.key === "action"
                  && "end"
                  
              }
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(row, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GeneralTable;