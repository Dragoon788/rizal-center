import { ConfettiIcon } from '@sanity/icons/Confetti'
import {defineType, defineField} from 'sanity'

export const event = defineType({
    name: 'event',
    type: 'document',
    icon: ConfettiIcon,
    fieldsets: [
        {name: 'schedule', title: 'Event Scheduling'},
        {name: 'details', title: 'Event Details'},
    ],
    fields: [
        // BASIC INFO
        defineField({
            name: 'eventTitle',
            type: 'string',
            fieldset: 'details',
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
            hidden: ({document}) => !document?.title,
            validation: rule => rule.required().error(`Required to generate an event page`)
        }),
        defineField({
            name: 'eventType',
            type: 'string',
            fieldset: 'details',
            options:{
                list: ['in-person', 'virtual'],
                layout: 'radio',
            }
        }),
        defineField({
            name: 'eventBody',
            type: 'array',
            fieldset: 'details',
            description: 'Write a description for the event using our rich text editor!',
            of: [{type: 'block'}],
        }),
        //////
        // SCHEDULE
        defineField({
            name: 'startDate',
            type: 'datetime',
            fieldset: 'schedule',
            options: {
                dateFormat: 'MM/DD/YYYY',
                timeFormat: 'h:mm A',
                timeStep: 15,
                displayTimeZone: 'America/Chicago'
            },
            initialValue: (new Date()).toISOString().split('T')[0],
        }),
        defineField({
            name: 'endDate',
            type: 'datetime',
            fieldset: 'schedule',
            options: {
                dateFormat: 'MM/DD/YYYY',
                timeFormat: 'h:mm A',
                timeStep: 15,
                displayTimeZone: 'America/Chicago'
            },
            hidden: ({document}) => !document?.startDate,
            initialValue: 'startDate',
            validation: rule => rule.min(rule.valueOfField('startDate')),
        }),
        ////// ETC
        defineField({
            name: 'venue',
            type: 'reference',
            to: [{type: 'location'}],
            readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
        }),
        defineField({
            name: 'coverImage',
            type: 'image',
            fieldset: 'details',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'status',
            type: 'string',
            fieldset: 'details',
            options:{
                list: ['scheduled', 'canceled', 'completed'],
                layout: 'radio',
            },
            initialValue: 'scheduled',
        }),
        defineField({
            name: 'topicTags',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'topic'}]}],
            description: 'Select an existing topic or create a new topic',
        }),
    ]
})