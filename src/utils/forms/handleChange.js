export default function handleFormChange(event, formValues, setFormValues) {
  const {value, id, name} = event.target
  if (event.type === 'blur') {
    setFormValues({...formValues, [id ? id : name]: value.trim()})
  } else if (event.type === 'change') {
    setFormValues({...formValues, [id ? id : name]: value})
  }
}
