import { useState, useEffect } from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"

interface CheckboxData {
  name: string
  checked: boolean // Agrega la propiedad 'checked'
}

interface CheckboxesGroupProps {
  tabName: string
  checkboxes: string[]
  buttonNames: string[]
  setCheckboxesNames: (checkboxNames: string[]) => void
}

export const CheckboxesGroup: React.FC<CheckboxesGroupProps> = ({
  tabName,
  checkboxes,
  buttonNames,
  setCheckboxesNames,
}) => {

  const [checkedItems, setCheckedItems] = useState<CheckboxData[]>(() => {
    return checkboxes.map(checkbox => ({
      name: checkbox,
      checked: false,
    }));
  });

  const handleGroupingCheckboxes = (buttonName: string) => {
    const updatedCheckedItems = [ ...checkedItems];
    console.log(updatedCheckedItems, "checkedItems");

    updatedCheckedItems.forEach(checkbox => {
      if (checkbox.name.toLowerCase().includes(buttonName.toLowerCase())) {
        checkbox.checked = true;
2.50      }
    });

    console.log(updatedCheckedItems, "updatedCheckedItems");
    const checkboxesNames = updatedCheckedItems
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.name);

      console.log(checkboxesNames, "checkboxesNamess")
    setCheckboxesNames(checkboxesNames);
  }


  const handleCheckboxChange = (checkboxName: string) => {
    const updatedCheckedItems = checkedItems.map(checkbox => {
      if (checkbox.name === checkboxName) {
        return {
          ...checkbox,
          checked: !checkbox.checked,
        };
      }
      return checkbox;
    });

    const checkboxesNames = updatedCheckedItems
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.name);

    setCheckboxesNames(checkboxesNames);

  }

  return (
    <FormGroup>
      <legend>{tabName}</legend>
      {checkboxes.map((checkboxName, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={checkedItems[index].checked} 
              onChange={() => handleCheckboxChange(checkboxName)}
            />
          }
          label={checkboxName}
        />
      ))}
      <div style={{ display: "flex", gap: "1rem" }}>
        {buttonNames.map((buttonName, index) => (
          <Button
            key={index}
            variant="contained"
            size="small"
            style={{ minWidth: "unset", minHeight: "unset" }}
            onClick={() => handleGroupingCheckboxes(buttonName)}
          >
            {buttonName}
          </Button>
        ))}
      </div>
    </FormGroup>
  )
}
