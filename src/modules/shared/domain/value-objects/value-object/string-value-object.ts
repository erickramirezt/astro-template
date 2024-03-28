import { BadRequestError } from '../../errors/bad-request-error'
import { ValueObject } from './value-object'

export class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value)
    this.validateStringValue(value)
  }

  static invalidStringValueMessage() {
    return 'El valor ingresado no es una cadena de texto.'
  }

  private validateStringValue(value: string) {
    if (typeof value !== 'string') {
      throw new BadRequestError(StringValueObject.invalidStringValueMessage())
    }
  }
}
