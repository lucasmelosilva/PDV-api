enum Role {
  Manager = 'Manager',
  Cashier = 'Cashier'
}

export interface Employee {
  registration: number
  cpf: string
  nome: string
  bothDate: Date
  role: Role
}
