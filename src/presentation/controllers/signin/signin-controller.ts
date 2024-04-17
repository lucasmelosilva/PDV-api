import type { AddEmployee } from '../../../domain/usecases/employee/add-employee'
import type { Validation } from '../../../validation/protocols/validation'
import { badRequest } from '../../helpers/http-helper'
import type { Controller, HttpResponse, HttpRequest } from '../../protocols'

export class SignInController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addEmployee: AddEmployee
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = await this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    const { cpf, name, role, dateOfBirth } = httpRequest.body
    await this.addEmployee.add({ cpf, name, role, dateOfBirth })

    return null
  }
}
