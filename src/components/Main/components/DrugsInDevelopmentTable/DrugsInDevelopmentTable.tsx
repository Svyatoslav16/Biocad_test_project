import { FC } from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { columns } from './columns';

export const DrugsInDevelopmentTable: FC = () => {
  return (
    <DataGrid
      autoHeight
      disableSelectionOnClick
      disableColumnSelector
      showCellRightBorder
      hideFooter
      // TODO: move mock data to api
      rows={[
        {
          id: '1',
          type: 'orphan',
          name: 'ANB-4',
          actionMechanism: 'SMN1 transgene AAV9',
          indication: 'CMA type 1',
          development: true,
          ctPhaseFirst: false,
          ctPhaseSecond: false,
          ctPhaseThird: false,
          registration: false,
        },
        {
          id: '2',
          type: 'orphan',
          name: 'ANB-2',
          actionMechanism: 'Factor-IX transgene AAV5',
          indication: 'Гемофилия B',
          development: true,
          ctPhaseFirst: true,
          ctPhaseSecond: false,
          ctPhaseThird: false,
          registration: false,
        },
        {
          id: '3',
          type: 'autoimmune',
          name: 'Сампэгинтерферон бета-1а (BCD-054)',
          actionMechanism: 'Pegylated interferon beta-1a',
          indication: 'Рассеянный склероз',
          development: true,
          ctPhaseFirst: true,
          ctPhaseSecond: true,
          ctPhaseThird: false,
          registration: false,
        },
        {
          id: '4',
          type: 'oncology',
          name: 'Пролголимаб (BCD-100)',
          actionMechanism: 'anti-PD-1 mAb',
          indication: 'НМРЛ',
          development: true,
          ctPhaseFirst: true,
          ctPhaseSecond: true,
          ctPhaseThird: true,
          registration: false,
        },
        {
          id: '5',
          type: 'oncology',
          name: 'Пролголимаб (BCD-100)',
          actionMechanism: 'anti-PD-1 mAb',
          indication: 'НМРЛ',
          development: true,
          ctPhaseFirst: true,
          ctPhaseSecond: true,
          ctPhaseThird: true,
          registration: true,
        },
        {
          id: '6',
          type: 'other',
          name: 'Пролголимаб (BCD-100)',
          actionMechanism: 'anti-PD-1 mAb',
          indication: 'НМРЛ',
          development: true,
          ctPhaseFirst: true,
          ctPhaseSecond: true,
          ctPhaseThird: true,
          registration: true,
        },
      ]}
      columns={columns}
      sx={{
        background: '#fff',
        '&.MuiDataGrid-root, & .MuiDataGrid-columnHeaders': {
          borderTopLeftRadius: '0',
          borderTopRightRadius: '0',
        },
        '& .MuiDataGrid-root': {
          borderTopLeftRadius: '0',
          borderTopRightRadius: '0',
        },
        '& .MuiDataGrid-columnHeaders': {
          bgcolor: 'primary.main',
          color: '#fff',
          textAlign: 'center',
        },
        '& .MuiDataGrid-columnSeparator': {
          display: 'none',
        },
        [`& .${gridClasses.row}:nth-child(odd)`]: {
          bgcolor: 'primary.lightGrey',
        },
        '& .MuiDataGrid-cell': {
          whiteSpace: 'initial !important',
          textAlign: 'center',
          color: 'primary.main',
        },
        '& .MuiDataGrid-cell.p-0': {
          padding: '0',
        },
      }}
    />
  );
};
