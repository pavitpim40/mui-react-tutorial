import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import FormControlLabel from "@mui/material/FormControlLabel";

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
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained">
          <Button startIcon={<SaveIcon />}>save</Button>
          <Button startIcon={<DeleteIcon />} color="error">
            discard
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
