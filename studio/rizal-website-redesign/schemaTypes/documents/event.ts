import { ConfettiIcon } from '@sanity/icons/Confetti'
import {defineType, defineField} from 'sanity'

export const event = defineType({
    name: 'event',
    type: 'document',
    icon: ConfettiIcon,
    fields: [
        // BASIC INFO
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required().max(150)
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').slice(0,200),
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'topic',
            type: 'reference',
            to: [{type: 'topic'}],
            description: 'Try using an existing topic for a better user experience!'
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{type: 'block'}],
        }),
        //////
        // SCHEDULE
        defineField({
            name: 'startDate',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'h:mm A',
                timeStep: 15,
                displayTimeZone: 'America/Chicago'
            },
            initialValue: (new Date()).toISOString().split('T')[0],
        }),
        defineField({
            name: 'endDate',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'h:mm A',
                timeStep: 15,
                displayTimeZone: 'America/Chicago'
            },
            // initialValue: 'startDate',
            validation: rule => rule.min(rule.valueOfField('startDate')),
        }),
        ////// ETC
        defineField({
            name: 'location',
            type: 'geopoint',
        }),
        defineField({
            name: 'coverImage',
            type: 'image',
        }),
        defineField({
            name: 'status',
            type: 'string',
            options:{
                list: ['scheduled', 'canceled', 'completed'],
                layout: 'radio',
            },
            initialValue: 'scheduled',
        }),
    ]
})