import { Uuid } from '@/modules/shared/domain/value-objects/uuid'
import { StringMother } from './mother-creator/string-mother'

export const UuidMother = {
  create(value?: string): Uuid {
    return new Uuid(value ?? StringMother.uuid())
  },

  createInvalid(): string {
    return StringMother.word({ max: 10 })
  },
}
