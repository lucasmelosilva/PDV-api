enum Role {
  Manager = 'Manager',
  Cashier = 'Cashier'
}

export interface EmployeeModel {
  registration: number
  cpf: string
  nome: string
  dateOfBirth: Date
  role: Role
}
