import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup, Button } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from '@mui/material/TextField';

import {makeStyles} from '@mui/styles';
import { createTheme,ThemeProvider} from '@mui/material/styles';
import { orange,green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    }
  }
})

const useStyles = makeStyles({
  root: {
    backgroundColor: 'linear-gradient(45deg,#333, #999)',
    border:0,
    borderRadius:60,
    color:"white",
    padding: '0 30px'

  }
})

function ButtonStyled() {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.root}>
      Hello World
    </Button>
  );
}
function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Secondary"
      />
    </div>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <ButtonStyled/>
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          label="The time"
          value=""
          placeholder="test@gmail.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained">
          <Button startIcon={<SaveIcon />}>save</Button>
          <Button startIcon={<DeleteIcon />} color="error" >
            discard
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
