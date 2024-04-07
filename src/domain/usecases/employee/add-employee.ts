import type { EmployeeModel } from '../../model/employee/employee-model'

export type AddEmployeeModel = Omit<EmployeeModel, 'registration'>

export interface AddEmployee {
  add (addEmployeeModel: AddEmployeeModel): Promise<EmployeeModel>
}
