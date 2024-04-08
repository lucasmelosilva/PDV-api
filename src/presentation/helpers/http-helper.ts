import type { HttpResponse } from '../protocols'

export function badRequest (error: Error): HttpResponse {
  return {
    status: 400,
    body: error
  }
}
