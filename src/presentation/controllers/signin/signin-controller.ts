import type { Validation } from '../../../validation/protocols/validation'
import type { Controller, HttpResponse, HttpRequest } from '../../protocols'

export class SignInController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.validation.validate(httpRequest.body)

    return {
      status: 400,
      body: {}
    }
  }
}
