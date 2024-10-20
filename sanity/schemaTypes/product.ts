import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = {
    name:"product",
    type:"document",
    title:"Product",
    fields:[
        {
            name:"name",
            type:"string",
            title:"name of product"
        },
        {
            name:"images",
            type:"array",
            title:"Product images",
            of : [{
                type:"image"
            }]
        },
        {
            name:"description",
            type:"text",
            title:"description of product"
        },
        {
            name:"slug",
            type:"slug",
            title:"product slug",
            options : {
                source : "name",
            }
        },
        {
            name:"price",
            type:"number",
            title:"price of product"
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string',
          },
        {
            name:"category",
            title:"product category",
            type:"reference",
            to: [{
                type:"category"
            }]
        }
    ]
}