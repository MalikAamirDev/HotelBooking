import * as React from 'react';
import Button from '@mui/material/Button';

export default function MButton({color,onClick, variant, value, sx, type}) {
  return (
      <Button color={color} type={type} variant={variant} onClick={onClick} sx={sx}>{value}</Button>
  );
}