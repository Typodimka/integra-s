import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {JSX} from 'react/jsx-runtime';
import {useClients} from "./hooks/clients";
import {Navigation} from "./components/Navigation";
import CreateClient from "./components/CreateClient"

// const {loading, error, clients }= useClients()


const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {


  const [value, setValue] = React.useState<Date | null>(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <>
    <Navigation/>
      <Container maxWidth="xl" sx={{p: '0px !important'}}>
        <CreateClient/>

        <Box
            component="form"
            sx={{
              mt: 3,
              '& .MuiTextField-root': {my: 1, width: '100%'},
            }}
            noValidate
            autoComplete="off"
        >
          <Container maxWidth="xl">


            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Example date"
                    value={value}
                    onChange={(newValue: React.SetStateAction<Date | null>) => {
                      setValue(newValue);
                    }}
                    renderInput={(params: JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined; } & Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div>
              <Button variant="contained" onClick={handleOpen} sx={{marginTop: "50px"}} >Open modal</Button>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle} >
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                  <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>Close modal</Button>
                </Box>
              </Modal>
            </div>
          </Container>
        </Box>
      </Container>
  </>
  );
}

export default App;
