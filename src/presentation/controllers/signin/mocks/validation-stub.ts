import { type Validation } from '../../../../validation/protocols/validation'

export class ValidationStub implements Validation {
  async validate (input: any): Promise<Error> {
    return await new Promise(resolve => resolve(null))
  }
}
