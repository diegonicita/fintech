import * as s from "../../Pages/Stepper/Steps/styles";

export const renderSwitch = (campo, f) => {
    
        const commonAttr = {
          type: campo.type,
          name: campo.name,
          placeholder: campo.placeholder,
          onChange: f.handleChange,
          onBlur: f.handleBlur,
          value: f.values[campo.name],
          borderError: f.errors[campo.name] && f.touched[campo.name],
          checked: f.values[campo.name]
        }
    
        switch (campo.type) {
          case 'text':
          case 'number':
          case 'date':
          case 'tel':
          case 'email':
            delete commonAttr.checked;
            return (
            <s.Label>
              <s.Input           
                {...commonAttr}
              />
            </s.Label>
            );
          case 'select':
            delete commonAttr.checked;
            return (
            <s.Label>
              <s.Select             
                {...commonAttr}
                >
                {campo.options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>);
                })}
              </s.Select>
            </s.Label>
            );
            case 'checkbox':
            return (
            <s.Label>
              <s.CheckBoxContainer>
                <s.CheckBox              
                  {...commonAttr}
                />
                <s.Terminos>
                  Declaro bajo juramento que toda la informacion consignada en
                  el presente formulario es fehaciente y he leido y acepto los
                  terminos de la Apertura de la Cuenta Comitente
                </s.Terminos>
              </s.CheckBoxContainer>
            </s.Label>
            );
          default:
            return '';
        }
      }