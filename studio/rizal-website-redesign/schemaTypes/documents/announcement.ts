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
            name: 'topics',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'topic'}]}],
            description: 'Topics group related content and help visitors discover events, posts, announcements, and resources around an area of interest.'
        }),
        // defineField({
        //     name: 'active',
        //     title: 'Currently Active?',
        //     type: 'boolean',
        // }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{type: 'block'}],
            description: 'Write the body of the announcement here.'
        }),
        // defineField({
        //     name: 'startDate',
        //     type: 'datetime',
        //     options: {
        //         dateFormat: 'MM-DD-YYYY',
        //         timeFormat: 'h:mm A',
        //         timeStep: 15,
        //         displayTimeZone: 'America/Chicago'
        //     },
        //     initialValue: (new Date()).toISOString().split('T')[0],
        // }),
        // defineField({
        //     name: 'endDate',
        //     type: 'datetime',
        //     options: {
        //         dateFormat: 'MM-DD-YYYY',
        //         timeFormat: 'h:mm A',
        //         timeStep: 15,
        //         displayTimeZone: 'America/Chicago'
        //     },
        //     // initialValue: 'startDate',
        //     validation: rule => rule.min(rule.valueOfField('startDate')),
        // }),
    ],
})