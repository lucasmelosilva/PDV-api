import { type HttpRequest } from '../../protocols/http'
import { ValidationStub } from './mocks/validation-stub'
import { SignInController } from './signin-controller'

describe('SignIn Controller', () => {
  it('should return 400 if Validation returns an error', async () => {
    const sut = new SignInController(new ValidationStub())
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
