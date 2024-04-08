import type { Validation } from '../../../validation/protocols/validation'
import type { HttpRequest } from '../../protocols/http'
import { ValidationStub } from './mocks/validation-stub'
import { SignInController } from './signin-controller'

interface SutType {
  sut: SignInController
  validationStub: Validation
}

function makeSut (): SutType {
  const validationStub = new ValidationStub()
  const sut = new SignInController(validationStub)
  return {
    sut,
    validationStub
  }
}

describe('SignIn Controller', () => {
  it('should return 400 if Validation returns an error', async () => {
    const { sut } = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        registration: 9019589,
        cpf: '12459387501',
        name: 'John Doe',
        dateOfBirth: new Date(),
        role: 'Manager'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.status).toBe(400)
  })
})
