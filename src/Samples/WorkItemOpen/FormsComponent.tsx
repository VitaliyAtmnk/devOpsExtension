import React, { useState } from 'react';
import "./FormsComponent.css"
import { TextField, TextFieldWidth } from "azure-devops-ui/TextField";

interface CustomTableProps {
  name: string;
}

const CustomTable: React.FC<CustomTableProps> = ({ name }) => {
  const [date, setDate] = useState('');
  const [request, setRequest] = useState('');
  const [hours, setHours] = useState('');
  const [note, setNote] = useState('');

  const tableStyle: React.CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const tdStyle: React.CSSProperties = {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  };

  const numberInputStyle: React.CSSProperties = {
    ...inputStyle,
    WebkitAppearance: "none",
    margin: "0",
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "100px",
  };

  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tdStyle}>Uživatel</td>
            <td>
              {name} { /* name of the logged user */}
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Datum práce</td>
            <td>
              <TextField
                inputType='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                width={TextFieldWidth.standard}
              />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Požadavek</td>
            <td>
              <TextField
                inputType='number'
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                width={TextFieldWidth.standard}
              />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Počet hodin</td>
            <td>
              <TextField
                inputType='number'
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                width={TextFieldWidth.standard}
              />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Poznámka</td>
            <td>
              <TextField
                autoAdjustHeight={true}
                inputType='text'
                value={note}
                onChange={(e) => setNote(e.target.value)}
                width={TextFieldWidth.standard}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
