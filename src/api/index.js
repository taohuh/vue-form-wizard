const user = {
  email: 'taohuh@gmail.com',
  password: '123456',
  name: 'Taohuh'
}

export const checkIfUserExistsInDB = email => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === user.email) {
          resolve(true)
        } else {
          reject('user not found')
        }
      }, 1000)
  })
}

export const authenticateUser = (email, password) => {
  return new Promise((resolve, reject) => {
    console.log(email === user.email && password === user.password)
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve({
          email: user.email,
          name: user.name
        })
      } else {
        reject('supplied credentials do not match any user')
      }
    }, 1000)
  })
}

export const postFormToDB = (form) => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(form), 1000)
  })
}