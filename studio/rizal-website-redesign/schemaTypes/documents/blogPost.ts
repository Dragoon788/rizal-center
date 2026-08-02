import {BookIcon} from '@sanity/icons/Book';
import { defineField, defineType } from "sanity";

export const blogPost = defineType({
    name: 'blogPost',
    type: 'document',
    icon: BookIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required().max(150),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').slice(0,200),
            },
        }),
        defineField({
            name: 'summary',
            type: 'text',
        }),
        defineField({
            name: 'body',
            type: 'text',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'featuredImage',
            type: 'image',
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
        }),
        defineField({
            name: 'publishDate',
            type: 'date',
            options: {
                dateFormat: 'MM-DD-YYYY',
            }
        })
    ],
    
})