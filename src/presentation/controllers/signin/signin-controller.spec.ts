import type { Validation } from '../../../validation/protocols/validation'
import type { HttpRequest } from '../../protocols/http'
import { ValidationStub } from './mocks/validation-stub'
import { SignInController } from './signin-controller'

import { badRequest } from '../../helpers/http-helper'

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

function makeRequest (): HttpRequest {
  return {
    body: {
      registration: 9019589,
      cpf: '12459387501',
      name: 'John Doe',
      dateOfBirth: new Date(),
      role: 'Manager'
    }
  }
}

describe('SignIn Controller', () => {
  it('should return 400 if Validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockImplementationOnce(async () => {
      return await new Promise((resolve => resolve(new Error('Validation failed'))))
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse).toEqual(badRequest(new Error('Validation failed')))
  })

  it('should call Validation with correct parameters', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })
})
