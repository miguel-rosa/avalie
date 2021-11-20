import { FC, useEffect, useState, useMemo} from "react";
import { FiArrowRight } from "react-icons/fi"

import styles from "./Form.module.css";
import Field from "./components/Field"
import { FieldsValues, TField } from "./components/Field/types";
import Button from "../Button";
import { getFirestore } from "firebase/firestore"
import { addDoc, collection } from "firebase/firestore";
import firebase from "../../data/firebase";
import Alert from "../Alert";

type Fields= TField & {
  label: string
}

type FormProps = {
  title: string;
  fields:Fields[];
  button: string;
}

const app = firebase;
const db = getFirestore();

const Form:FC<FormProps> = ({title, fields, button}) => {

  const DEFAULT_FIELD_VALUES = Object.assign({}, ...(fields.map(item => ({ [item.id]: undefined }) )))

  const [fieldsValues, setFieldsValues] = useState<FieldsValues>({});
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [sended, setSended] = useState(false)
  
  const areAllFieldsFilled = useMemo(
    () => !fields.some(({id, required}) => required && fieldsValues[id] === undefined),
    [fieldsValues, fields]
  )

  const handleFormSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    setButtonClicked(true)
    if(areAllFieldsFilled) {
      sendFormData(e)
    }
  }

  const sendFormData = async (e:React.FormEvent) => {

    try {
      const docRef = await addDoc(collection(db, "leads"), fieldsValues);
      setShowSuccessAlert(true);
      setSended(true);
      setFieldsValues(DEFAULT_FIELD_VALUES);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    console.log("fieldsValues", fieldsValues)
  },[fieldsValues])

  useEffect(() => {
    if (!buttonClicked) return
    setShowError(!areAllFieldsFilled && !sended)
  }, [buttonClicked, fieldsValues, areAllFieldsFilled, sended])

  return (
    <>
    <form className={`${styles.form} fadeInUp`} onSubmit={(e) => handleFormSubmit(e)}>
      <h2 className="mb3 f4">{title}</h2>
      { 
        fields.map(({placeholder, label, id, type="input" }) => {
         return (
          <fieldset 
            className="flex flex-column ml0 mr0 pa0 bn"
            key={id}
          >
          <label className={`${styles.label} f6 fw6 mb1`} htmlFor={id}>
            {label}
          </label>
          <Field
            type={type}
            key={id}
            placeholder={placeholder}
            id={id}
            setState={setFieldsValues}
            setSended={setSended}
            showError={showError}
            state={fieldsValues}
          />
        </fieldset>
      )})}
      <div className="flex justify-end mt3">
        <Button type="submit">
          {button} 
          <FiArrowRight className="ml2"/>
        </Button>
      </div>
    </form>
    { showSuccessAlert && <Alert show={showSuccessAlert} setShow={setShowSuccessAlert} title="Sua contribuição foi muito importante!" message="Bora mudar junto o futuro dos processos seletivos, obrigado!"/>}
    </>
  )
};

export default Form;