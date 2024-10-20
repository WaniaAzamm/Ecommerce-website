import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'


export default  {
  name:"category",
  type:"document",
  title:"Categories",
  fields : [{
    name:"name",
    title:"name of category",
    type:"string"
  
  }]
}