import { type SchemaTypeDefinition } from 'sanity'

import categoryType from './categoryType'
import {postType} from './product'
import headimage from './headimage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, categoryType,headimage],
}
