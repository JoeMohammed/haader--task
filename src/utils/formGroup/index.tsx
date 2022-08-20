import { FocusEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import { OfficeBuildingIcon } from '@heroicons/react/outline';
import { UseFormRegister } from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  inputName: string;
  type: string;
  label: string;
  invalidClass: string;
  invalidMessage?: string;
  inputClass?: string;
}

export default function FormGroup({
  register,
  inputName,
  type,
  label,
  invalidClass,
  invalidMessage,
  inputClass,
}: IInputProps) {
  const [valid, setValid] = useState<boolean>(false);

  return (
    <Form.Group className="mb-3 form_group" controlId="formBasicPassword">
      <Form.Control
        type={type}
        {...register(inputName)}
        onBlur={(event: FocusEvent<HTMLInputElement>) => {
          if (event.currentTarget.value) {
            setValid(true);
          } else {
            setValid(false);
          }
        }}
        className={`form_group_control ${inputClass} ${valid ? 'valid' : ''}`}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <span className="icon">
        <OfficeBuildingIcon />
      </span>
      <Form.Label className="form_group_label">{label}</Form.Label>
      <Form.Control.Feedback type="invalid" className={invalidClass}>
        {invalidMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
