import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import ordersSchema from './orders'
import contactForm from './contact'
import shippingForm from './shippingForm'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,ordersSchema,contactForm,shippingForm],
}
