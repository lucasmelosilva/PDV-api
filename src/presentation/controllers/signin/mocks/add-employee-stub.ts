import type { EmployeeModel } from '../../../../domain/model/employee/employee-model'
import type { AddEmployee, AddEmployeeModel } from '../../../../domain/usecases/employee/add-employee'

export class AddEmployeeStub implements AddEmployee {
  async add (addEmployeeModel: AddEmployeeModel): Promise<EmployeeModel> {
    return await new Promise(resolve => resolve({
      registration: 123456,
      cpf: 'any_cpf',
      name: 'any_nome',
      dateOfBirth: new Date(),
      role: 'cashier'
    }))
  }
}
