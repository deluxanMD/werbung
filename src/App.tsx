import React from "react";
import { Button } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const App = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AcUnitIcon />
    </div>
  );
};

export default App;
