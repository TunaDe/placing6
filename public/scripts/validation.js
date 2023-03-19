export function validate(input) {
  const inputType = input.dataset.type

  if (input.validity.valid) {
    input.classList.remove('error')
    input.nextElementSibling.innerHTML = ''
  } else {
    input.classList.add('error')
    input.nextElementSibling.innerHTML = showErrorMsg(inputType, input)
  }
}

export function checkLength(input) {
  if (input.value.length < input.maxLength) {
    input.classList.remove('error')
    input.nextElementSibling.innerHTML = ''
  } else {
    input.classList.add('error')
    input.nextElementSibling.innerHTML = 'The character limit has been reached.'
  }
}

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const valueMissing = 'The field cannot be empty.'

const errorMsgs = {
  email: {
    valueMissing: valueMissing,
    typeMismatch: 'The email entered is not valid.'
  },
  pass: {
    valueMissing: valueMissing,
    patternMismatch:
      'The password must contain between 6 and 12 characters and must include at least one capital letter, one number and must not contain symbols.'
  },
  contact: {
    valueMissing: valueMissing
  },
  name: {
    valueMissing: valueMissing
  },
  alternate: {
    valueMissing: valueMissing
  },
  description: {
    valueMissing: valueMissing
  },
  category: {
    valueMissing: valueMissing
  }
}

function showErrorMsg(inputType, input) {
  let message = ''

  errorTypes.forEach(error => {
    if (input.validity[error]) {
      message = errorMsgs[inputType][error]
    }
  })

  return message
}
