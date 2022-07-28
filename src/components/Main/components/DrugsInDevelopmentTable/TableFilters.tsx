import { FC, useState } from 'react';
import { t } from '@lingui/macro';
import { Box, FormControl, Grid, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const TableFilters: FC = () => {
  return (
    <Box sx={{ margin: '90px 0 0' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <FilterSelect label={t`PRODUCT_TYPE`} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FilterSelect label={t`MOLECULE_TYPE`} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FilterSelect label={t`PLATFORM`} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FilterSelect label={t`THERAPY_AREA`} />
        </Grid>
      </Grid>
    </Box>
  );
};

// TODO: move to types.ts
interface SelectProps {
  label: string;
}

export const FilterSelect: FC<SelectProps> = ({ label }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, background: '#fff' }}>
      <FormControl fullWidth variant="standard">
        <InputLabel sx={{ color: 'primary.main' }}>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={handleChange}
          sx={{
            '&.MuiInputBase-root::before ': {
              borderColor: 'border.grey',
            },
            '&.MuiInputBase-root:hover:not(.Mui-disabled)': {
              bgcolor: 'none',
            },
            '& .MuiInputBase-input:focus': {
              bgcolor: 'transparent',
            },
            '&.MuiInputBase-root:hover:not(.Mui-disabled)::before': {
              borderBottom: '1px solid',
              borderColor: 'border.grey',
            },
            '&.MuiInputBase-root::after': {
              borderBottom: '1px solid',
              borderColor: 'border.blue',
              left: 'calc(100% - 0.75em)',
            },
            '& .MuiSelect-icon': {
              right: '-6px',
              color: 'primary.main',
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
