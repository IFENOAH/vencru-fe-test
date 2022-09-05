import classNames from 'classnames';
import * as React from 'react';
import {
  useTable,
  useSortBy,
} from 'react-table';
import * as Icon from 'react-feather'

const cellClass = classNames('py-6 px-4 cursor-pointer text-vencru-darkgray text-xs');
const rowClass = classNames('hover:bg-vencru-lightgray, cursor-pointer, text-vencru-darkgray');
const borderRowClass = classNames(
  'border-b',
  'border-vencru-stroke',
  'last-of-type:border-none'
);
const whiteBG = classNames('bg-vencru-white');
const overflowX = classNames('overflow-x-auto');
const ShadowRnd = classNames('shadow-md', 'rounded-lg');
const outline = classNames('outline', 'outline-vencru-stroke');
const baseClass = classNames('text-vencru-darkgray w-full', 'scroll', overflowX);
const withShadowRndClass = classNames(whiteBG, ShadowRnd, outline);

export const Table = ({
  columns,
  data,
  variant,
  withShadowRnd,
}) => {
  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const tableParentClass = classNames(baseClass, {
    [withShadowRndClass]: withShadowRnd,
  });

  return (
    <div className={tableParentClass}>
      <table
        {...getTableProps()}
        className={`min-w-max w-full table-auto  ${
          variant === 'border' ? 'border-spacing' : ''
        }`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className={`${
                variant === 'default' ? 'bg-white' : 'bg-vencru-lightgray'
              } text-vencru-darkgray leading-normal text-left text-xs font-normal`}
            >
              {(headerGroup.headers).map(
                (column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={cellClass}
                  >
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Icon.ArrowDown className="w-4 h-4 text-vencru-darkgray" />
                        ) : (
                          <Icon.ArrowUp className="w-4 h-4 text-vencru-darkgray" />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </th>
                )
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            const isOdd = i % 2 === 1;

            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={classNames(rowClass, {
                  [classNames('bg-vencru-darkgray')]: !isOdd && variant === 'default',
                  [borderRowClass]: variant === 'border',
                })}
                key={i}
              >
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      {...cell.getCellProps}
                      className={cellClass}
                      key={cellIndex}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  variant: 'default',
  withShadowRnd: true,
};
