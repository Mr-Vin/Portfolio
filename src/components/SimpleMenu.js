import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function SimpleMenu({ options, buttonLabel }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button type="button" sx={{color: '#000000', '&:hover': {color: "red"}}} onClick={handleClick}>
        {typeof buttonLabel === 'string' ? buttonLabel : buttonLabel}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose} >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


