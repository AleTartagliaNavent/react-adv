import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput, } from '../components'

import '../styles/styles.css';


export const FormikAbstractation = () => {

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          jobType: "",
          lastName: "",
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values)
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe de tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
          terms: Yup.boolean().isTrue().required(),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida.')
            .required()
        })}
      >

        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder="Ale"
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder="tartaglia"
            />
            <MyTextInput
              label='Email'
              name='email'
              type="email"
            />

            <MySelect label="Job Type" name='jobType' >
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-jr">It-Junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />


            <button type="submit">Submit</button>
          </Form>
        )

        }

      </Formik>


    </div>
  )
}
