export type TField = {
  placeholder: string;
  id: string;
  type: Type;
  required?: boolean;
};

export type FieldProps = TField & {
  setState(previousState:any): void;
  state: FieldsValues;
  showError: boolean;
  setSended(p:any): void; 
}

export type FieldsValues = {
  [x: string]: string;
}

type Type = "input" | "textarea"

