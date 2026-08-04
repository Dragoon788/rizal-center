import {HashIcon} from '@sanity/icons/Hash';
import { defineField, defineType } from 'sanity';

export const topic = defineType({
    name: 'topic',
    type: 'document',
    icon: HashIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Topic Name',
            type: 'string',
            validation: rule => rule.required().max(100)
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200,
                slugify: input => input.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').slice(0,200),
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'coverImage',
            type: 'image',
        }),
    ],
})