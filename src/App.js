import React, { useState } from "react";
import "./App.css";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

function App() {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setCols(resp.cols);
        setRows(resp.rows);
      }
    });
  };
  return (
    <div className="App">
      <input type="file" onChange={fileHandler} style={{ padding: "10px" }} />
      <OutTable
        data={rows}
        columns={cols}
        tableClassName="ExcelTable2007"
        tableHeaderRowClass="heading"
      />
    </div>
  );
}

export default App;
