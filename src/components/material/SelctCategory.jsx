import {useState} from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 15,
    padding: '10px 26px 10px 12px',
    color: '#495057',
    height:'100%' ,
    fontFamily: [
      'PingFang',
    ].join(','),
    '&:focus': {
      borderRadius: 8,
      backgroundColor: '#fff',
    },
  },
}));

export default function SelctCategory() {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ width:"100%" }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={category}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={'vegetables'}>vegetables</option>
          <option value={'fruits'}>fruits</option>
          <option value={'other'}>other</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}