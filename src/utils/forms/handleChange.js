export default function handleFormChange(event, formValues, setFormValues) {
  const {value, id} = event.target
  if (event.type === 'blur') {
    setFormValues({...formValues, [id]: value.trim()})
  } else if (event.type === 'change') {
    setFormValues({...formValues, [id]: value})
  }
}
