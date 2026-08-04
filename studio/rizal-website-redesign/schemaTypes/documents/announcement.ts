import {BellIcon} from '@sanity/icons/Bell';
import {defineField, defineType} from 'sanity';

export const announcement = defineType({
    name: 'announcement',
    type: 'document',
    icon: BellIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            placeholder: 'Ex: Holiday closure',
            description: 'Write a short title for the announcement',
            validation: rule => rule.required().max(100),
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'active',
            title: 'Currently Active?',
            type: 'boolean',
        }),
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
    ],
})