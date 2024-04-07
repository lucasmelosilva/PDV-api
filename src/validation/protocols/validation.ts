export interface Validation {
  validate (value: any): Promise<Error>
}
