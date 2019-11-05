import TypeUser from './../types/user'

const userQuery = {
  type: TypeUser,
  resolve: () => ({
    uid: '123424',
    email: 'testing@mail.com',
    first_name: 'Solidad',
    last_name: 'Romero',
    password: 'testing',
    type: 'employee',
    address: 'test address',
    contact_no: '123-4567-890',
    created_by: '1234345'
  })
}

export default userQuery
