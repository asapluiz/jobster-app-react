type TextField = {
  id: string;
  label: string;
  name: string;
  type: 'text';
  value: string;
  // Optional placeholder can be added here if needed
  // placeholder?: string;
};

type SelectOption = {
  value: string;
  text: string;
};

type SelectField = {
  id: string;
  label: string;
  name: string;
  type: 'select';
  value: string;
  option: SelectOption[];
  // Optional placeholder can be added here if needed
  // placeholder?: string;
};

export type JobFieldType = TextField[] | SelectField[];


