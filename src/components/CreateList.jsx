import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import MainForm from './form/MainForm'

const CreateList = () => {
    // create list tugas
  const [formValues, setFormValues] = useState(
    {
      id : '',
      tugas : '',
      kondisi : '',
    });
  // create onSubmit handler
  const onSubmit = tugasObject => {
    axios.post('http://localhost:3000/', tugasObject)
      .then(res => {
        if (res.status === 200)
        alert("list is on")
        else
        Promise.reject()
      })
      .catch(err => alert("something wrong"))
  }
  return (
    <MainForm initialValues= {formValues}
    onSubmit={onsubmit}
    enableReinitialize>
        Create
    </MainForm>
  )
}

export default CreateList