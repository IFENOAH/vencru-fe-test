import React, { useMemo } from 'react';
import { Table } from './table';
import Button from '../Forms/button'
import * as Icon from 'react-feather'
import TextCheckbox from '../Forms/textcheckbox';
import SquareCheckbox from '../Forms/SquareCheckbox';
import Badge from '../connected/badge';

export const SettingsTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Invoice',
        accessor: 'invoice',
        Cell: ({ value }) =>  <TextCheckbox leftNode = {<SquareCheckbox />} text = 'Basic Plan - Dec 2022' />,
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ value }) => (
          <h2 className="text-vencru-main text-sm">
            {value}
          </h2>
        ),
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => <h2>{value}</h2>,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <Badge leftIcon={<Icon.Check width= '15px' height = '15px' />} paid children='Paid' />
      },
      {
        Header: 'Users on plan',
        accessor: 'plan',
        Cell: ({value}) => <div class="flex -space-x-[15px]">
          <img class="w-8 h-8 rounded-full border border-vencru-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
          <img class="w-8 h-8 rounded-full border border-vencru-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
          <img class="w-8 h-8 rounded-full border border-vencru-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt=""/>
          <img class="w-8 h-8 rounded-full border border-vencru-white" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt=""/>
          <img class="w-8 h-8 rounded-full border border-vencru-white" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
          <span class="flex justify-center items-center w-8 h-8 text-xs font-medium text-vencru-main bg-vencru-lightgray rounded-full border-2 border-vencru-stroke">+9</span>
        </div>
      },
      {
        Header: '',
        accessor: 'action',
        Cell: ({ value }) => <Button imgAfter={<Icon.DownloadCloud />} link >{value}</Button>,
      },
    ],
    []
  );
  const tabledata = React.useMemo(
    () => [
      {
        invoice: '',
        amount: 'USD $10.00',
        date: 'Dec 1, 2022',
        status: 'Paid',
        plan: 'Basic plan',
        action: '',
      },
      {
        invoice: '',
        amount: 'USD $10.00',
        date: 'Dec 1, 2022',
        status: 'Paid',
        plan: 'Basic plan',
        action: '',
      },
      {
        invoice: '',
        amount: 'USD $10.00',
        date: 'Dec 1, 2022',
        status: 'Paid',
        plan: 'Basic plan',
        action: '',
      },
      {
        invoice: '',
        amount: 'USD $10.00',
        date: 'Dec 1, 2022',
        status: 'Paid',
        plan: 'Basic plan',
        action: '',
      },
      {
        invoice: '',
        amount: 'USD $10.00',
        date: 'Dec 1, 2022',
        status: 'Paid',
        plan: 'Basic plan',
        action: '',
      },
    ],
    []
  );
  return (
    <div className="w-full space-y-8">
      <Table 
        columns={columns}
        data={tabledata}
        withShadowRnd={true}
        variant="border"
      />
    </div>
  );
};
