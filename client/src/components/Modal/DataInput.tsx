import Select from 'react-select';
import './DataInput.css';
import React, { type FC } from 'react';

interface InputData {
  value: string | number;
  setter: (value: string | number) => void;
  max?: number;
  min?: number;
  options?: any[];
  style?: any;
}

const TextInput: FC<InputData> = ({ setter, max, value = '', ...props }) => (
  <input
    type="text"
    value={value as string}
    onChange={e => {
      setter(e.target.value);
    }}
    maxLength={max}
    {...props}
  />
);

const NumberInput: FC<InputData> = ({ setter, max, min, ...props }) => (
  <input
    type="number"
    min={min ?? 0}
    max={max ?? 800}
    onChange={e => {
      setter(e.target.value);
    }}
    {...props}
  />
);

const DateInput: FC<InputData> = ({ setter, ...props }) => (
  <input
    type="date"
    onChange={e => {
      setter(e.target.value);
    }}
    {...props}
  />
);

const TextAreaInput: FC<InputData> = ({
  setter,
  max,
  value = '',
  ...props
}) => (
  <textarea
    value={value}
    onChange={e => {
      setter(e.target.value);
    }}
    maxLength={max}
    {...props}
  />
);

const SelectInput: FC<InputData> = ({
  value,
  options,
  setter,
  style,
  ...props
}) => {
  const optionsList = options!.map(({ _id, name }) => ({
    value: _id,
    label: name,
  }));

  return (
    <Select
      options={options}
      value={optionsList.find(({ value: val }) => val === value)}
      onChange={e => {
        if (e) setter(e.value);
      }}
      styles={{
        control: provided => ({
          ...provided,
          ...style,
          width: 400,
        }),
      }}
      menuPortalTarget={document.body}
      menuPosition={'fixed'}
      {...props}
    />
  );
};

const MAP_ID_TO_INPUT_COMP = {
  text: TextInput,
  number: NumberInput,
  textarea: TextAreaInput,
  select: SelectInput,
  date: DateInput,
};

interface Props {
  id: string;
  type: 'text' | 'number' | 'textarea' | 'select' | 'date';
  label: string;
  value: string | number;
  setData: (data: any) => void;
  // removeError: () => void;
  // isError: boolean;
}

export const DataInput: FC<Props> = ({
  id: dataId,
  type,
  label,
  value,
  setData,
  // removeError,
  // isError,
  ...inputData
}) => {
  const InputComp = MAP_ID_TO_INPUT_COMP[type];

  // const style = isError ? { border: '2px solid red' } : {};

  const setter = (val: string | number) => {
    // if (isError) removeError();
    setData((prev: any) => ({ ...prev, [dataId]: val }));
  };

  return (
    <div className="input">
      <label>{label}</label>
      <InputComp value={value} setter={setter} {...inputData} />
    </div>
  );
};
