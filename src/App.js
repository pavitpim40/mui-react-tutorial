import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
