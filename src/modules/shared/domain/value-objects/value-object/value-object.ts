import { BadRequestError } from '../../errors/bad-request-error'

type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  constructor(readonly value: T) {
    this.validateValue(value)
  }

  equals(other: ValueObject<T>): boolean {
    return (
      this.value === other.value ||
      this.constructor.name === other.constructor.name
    )
  }

  toString(): string {
    return this.value.toString()
  }

  static invalidValueMessage() {
    return 'El valor ingresado no está definido.'
  }

  private validateValue(value: Primitives) {
    if (value === null || value === undefined) {
      throw new BadRequestError(ValueObject.invalidValueMessage())
    }
  }
}
