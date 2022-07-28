/** @jsxRuntime classic */
/** @jsx jsx */
import { t } from '@lingui/macro';
import { css, jsx } from '@emotion/react';
import { GridColumns } from '@mui/x-data-grid';

export const columns: GridColumns = [
  {
    field: 'type',
    headerName: '',
    flex: 1,
    maxWidth: 20,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row: { type } }) => {
      let border = '#402985';

      switch (type) {
        case 'orphan':
          border = '#0067BB';
          break;
        case 'autoimmune':
          border = '#78E6D0';
          break;
        case 'oncology':
          border = '#FA6469';
          break;
        default:
          break;
      }

      return <span style={{ border: `2px solid ${border}`, height: '20px' }} />;
    },
  },
  {
    field: 'name',
    headerName: t`PRODUCT_NAME`,
    renderHeader: () => <span css={customHeaderCSS}>{t`PRODUCT_NAME`}</span>,
    flex: 1,
    minWidth: 200,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'actionMechanism',
    headerName: t`MECHANISM_ACTION_THERAPEUTIC_AGENT`,
    flex: 1,
    minWidth: 200,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => {
      return (
        <span style={{ whiteSpace: 'break-spaces', lineHeight: 'initial' }}>
          {t`MECHANISM_ACTION_THERAPEUTIC_AGENT`}
        </span>
      );
    },
  },
  {
    field: 'indication',
    headerName: t`INDICATION`,
    flex: 1,
    minWidth: 150,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => <span css={customHeaderCSS}>{t`INDICATION`}</span>,
  },
  {
    field: 'development',
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'left',
    cellClassName: 'p-0',
    renderHeader: () => <span css={customHeaderCSS}>{t`DEVELOPMENT`}</span>,
    renderCell: (props) => {
      const {
        development,
        ctPhaseFirst,
        ctPhaseSecond,
        ctPhaseThird,
        registration,
      } = props.row;

      if (ctPhaseFirst || ctPhaseSecond || ctPhaseThird || registration) {
        return (
          <p style={{ width: '100%' }}>
            <span
              style={{
                display: 'block',
                width: '100%',
                border: '1px solid #0C204D',
              }}
            />
          </p>
        );
      }

      if (development) {
        return (
          <p style={{ width: '100%' }}>
            <span
              // TODO: use theme color
              css={css`
                display: block;
                position: relative;
                width: 50%;
                border: 1px solid #0c204d;
                &::after {
                  content: '';
                  position: absolute;
                  top: calc(50% - 2.5px);
                  right: -2.5px;
                  width: 5px;
                  height: 5px;
                  background: #0c204d;
                  border-radius: 50%;
                }
              `}
            />
          </p>
        );
      }

      return null;
    },
  },
  {
    field: 'ctPhaseFirst',
    headerName: `${t`CLINICAL_TRIALS_PHASE_SHORT`} |`,
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    cellClassName: 'p-0',
    renderHeader: () => (
      <span css={customHeaderCSS}>
        {t`CLINICAL_TRIALS_PHASE_SHORT`}
        &nbsp;
        |
      </span>
    ),
    renderCell: (props) => {
      const { ctPhaseFirst, ctPhaseSecond, ctPhaseThird, registration } = props.row;

      if (ctPhaseSecond || ctPhaseThird || registration) {
        return (
          <p style={{ width: '100%' }}>
            <span
              style={{
                display: 'block',
                width: '100%',
                border: '1px solid #0C204D',
              }}
            />
          </p>
        );
      }

      if (ctPhaseFirst) {
        return (
          <p style={{ width: '100%' }}>
            <span
              // TODO: use theme color
              css={css`
                display: block;
                position: relative;
                width: 50%;
                border: 1px solid #0c204d;
                &::after {
                  content: '';
                  position: absolute;
                  top: calc(50% - 2.5px);
                  right: -2.5px;
                  width: 5px;
                  height: 5px;
                  background: #0c204d;
                  border-radius: 50%;
                }
              `}
            />
          </p>
        );
      }

      return '';
    },
  },
  {
    field: 'ctPhaseSecond',
    headerName: `${t`CLINICAL_TRIALS_PHASE_SHORT`} ||`,
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    cellClassName: 'p-0',
    renderHeader: () => (
      <span css={customHeaderCSS}>
        {t`CLINICAL_TRIALS_PHASE_SHORT`}
        &nbsp;
        ||
      </span>
    ),
    renderCell: (props) => {
      const { ctPhaseSecond, ctPhaseThird, registration } = props.row;

      if (ctPhaseThird || registration) {
        return (
          <p style={{ width: '100%' }}>
            <span
              style={{
                display: 'block',
                width: '100%',
                border: '1px solid #0C204D',
              }}
            />
          </p>
        );
      }

      if (ctPhaseSecond) {
        return (
          <p style={{ width: '100%' }}>
            <span
              // TODO: use theme color
              css={css`
                display: block;
                position: relative;
                width: 50%;
                border: 1px solid #0c204d;
                &::after {
                  content: '';
                  position: absolute;
                  top: calc(50% - 2.5px);
                  right: -2.5px;
                  width: 5px;
                  height: 5px;
                  background: #0c204d;
                  border-radius: 50%;
                }
              `}
            />
          </p>
        );
      }

      return '';
    },
  },
  {
    field: 'ctPhaseThird',
    headerName: `${t`CLINICAL_TRIALS_PHASE_SHORT`} |||`,
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    cellClassName: 'p-0',
    renderHeader: () => (
      <span css={customHeaderCSS}>
        {t`CLINICAL_TRIALS_PHASE_SHORT`}
        &nbsp;
        |||
      </span>
    ),
    renderCell: (props) => {
      const { ctPhaseThird, registration } = props.row;

      if (registration) {
        return (
          <p style={{ width: '100%' }}>
            <span
              style={{
                display: 'block',
                width: '100%',
                border: '1px solid #0C204D',
              }}
            />
          </p>
        );
      }

      if (ctPhaseThird) {
        // TODO: set css common
        return (
          <p style={{ width: '100%' }}>
            <span
              // TODO: use theme color
              css={css`
                display: block;
                position: relative;
                width: 50%;
                border: 1px solid #0c204d;
                &::after {
                  content: '';
                  position: absolute;
                  top: calc(50% - 2.5px);
                  right: -2.5px;
                  width: 5px;
                  height: 5px;
                  background: #0c204d;
                  border-radius: 50%;
                }
              `}
            />
          </p>
        );
      }

      return '';
    },
  },
  {
    field: 'registration',
    headerName: t`REGISTRATION`,
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    cellClassName: 'p-0',
    renderHeader: () => <span css={customHeaderCSS}>{t`REGISTRATION`}</span>,
    renderCell: (props) => {
      const { registration } = props.row;

      if (registration) {
        return (
          <p style={{ width: '100%' }}>
            <span
              // TODO: use theme color
              css={css`
                display: block;
                position: relative;
                width: 50%;
                border: 1px solid #0c204d;
                &::after {
                  content: '';
                  position: absolute;
                  top: calc(50% - 2.5px);
                  right: -2.5px;
                  width: 5px;
                  height: 5px;
                  background: #0c204d;
                  border-radius: 50%;
                }
              `}
            />
          </p>
        );
      }

      return '';
    },
  },
];

const customHeaderCSS = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
`;
