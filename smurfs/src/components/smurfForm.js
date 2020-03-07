  
import React from 'react';
import { withFormik, Form, Field } from 'formik';

import axios from 'axios';

function SmurfForm({ errors, touched }) {

    return <div className="form">
        <Form>
            <div>
                {errors.name && <p>{errors.name}</p>}
                <Field
                    type='text'
                    name='name'
                    placeholder='Add New Smurf'
                />
            </div>


            <div>
                {touched.name && errors.age && <p>{errors.age}</p>}
                <Field
                    type='text'
                    name='age'
                    placeholder='Enter Age'
                />
            </div>

            <div>
                {touched.age && errors.height && <p>{errors.height}</p>}
                <Field
                    type='text'
                    name='height'
                    placeholder='Enter Height'
                />
            </div>

            <button type='submit'>Add A New Smurf</button>

        </Form>

    </div>
};



const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {

        return {
            name: name || '',
            age: age || '',
            height: height || '',
        };
    },


    handleSubmit(values, { resetForm }) {

        console.log('Handle Submit Values', values)

        axios.post('http://localhost:3333/smurfs', values)

            .then(res => {
                console.log('t res', res)
                resetForm();
            })

            .catch(err => {
                console.log(' err', err)
            })
    },
})(SmurfForm)


export default FormikSmurfForm;