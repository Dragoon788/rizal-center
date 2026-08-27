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
            name: 'topic',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'topic'}]}],
            description: 'Try using an existing topic for a better user experience!'
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{type: 'block'}],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'featuredImage',
            type: 'image',
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{type: 'profile'}]
        }),
        defineField({
            name: 'publishDate',
            type: 'date',
            options: {
                dateFormat: 'MM-DD-YYYY',
            },
            initialValue: (new Date()).toISOString().split('T')[0],
        })
    ],
    
})