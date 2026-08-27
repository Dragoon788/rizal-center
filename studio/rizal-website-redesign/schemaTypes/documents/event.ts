import { ConfettiIcon } from '@sanity/icons/Confetti'
import {defineType, defineField} from 'sanity'

export const event = defineType({
    name: 'event',
    type: 'document',
    icon: ConfettiIcon,
    fieldsets: [
        // Open by default, logically groups the logistics
        {name: 'logistics', title: 'When & Where', options: {collapsible: true}},
        // Collapsed by default to hide scary technical fields
        {name: 'advanced', title: 'Advanced & Admin', options: {collapsed: true}},
    ],
    fields: [
        // --- 1. THE "WHAT" (Top of the page, no fieldset) ---
        defineField({
            name: 'eventTitle',
            title: 'Event Title',
            type: 'string',
            validation: rule => rule.required().max(150)
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'eventBody',
            title: 'Event Description',
            type: 'array',
            description: 'Write a description for the event.',
            of: [{type: 'block'}], 
        }),

        // --- 2. THE "WHEN & WHERE" (Logistics Fieldset) ---
        defineField({
            name: 'startDate',
            title: 'Start Date & Time',
            type: 'datetime',
            fieldset: 'logistics',
            options: {
                dateFormat: 'MM/DD/YYYY',
                timeFormat: 'h:mm A',
                timeStep: 15,
            },
            initialValue: (new Date()).toISOString().split('T')[0],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'endDate',
            title: 'End Date & Time',
            type: 'datetime',
            fieldset: 'logistics',
            options: {
                dateFormat: 'MM/DD/YYYY',
                timeFormat: 'h:mm A',
                timeStep: 15,
            },
            // Automatically populate with the start date to save them a click
            initialValue: (new Date()).toISOString().split('T')[0], 
            validation: rule => rule.min(rule.valueOfField('startDate')),
        }),
        defineField({
            name: 'eventType',
            title: 'Event Type',
            type: 'string',
            fieldset: 'logistics',
            options:{
                list: [
                    {title: 'In-Person', value: 'in-person'},
                    {title: 'Virtual', value: 'virtual'}
                ],
                layout: 'radio',
            },
            initialValue: 'in-person', // Default to save a click
        }),
        defineField({
            name: 'venue',
            title: 'Venue Location',
            type: 'reference',
            fieldset: 'logistics',
            to: [{type: 'location'}],
            // UX MAGIC: Completely hides this field if it's a virtual event
            hidden: ({document}) => document?.eventType === 'virtual',
        }),

        // --- 3. THE "ADMIN" (Advanced Fieldset, Collapsed) ---
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            fieldset: 'advanced',
            description: 'Click generate to create the URL. Do not change this after the event is published!',
            options: {
                source: 'eventTitle',
                maxLength: 200,
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'topicTags',
            title: 'Topics',
            type: 'array',
            fieldset: 'advanced',
            of: [{type: 'reference', to: [{type: 'topic'}]}],
        }),
        defineField({
            name: 'status',
            title: 'Event Status',
            type: 'string',
            fieldset: 'advanced',
            description: 'Only change this if the event is canceled or postponed.',
            options:{
                list: [
                    {title: 'Scheduled (Normal)', value: 'scheduled'}, 
                    {title: 'Canceled', value: 'canceled'}, 
                    {title: 'Postponed', value: 'postponed'}
                ],
                layout: 'radio',
            },
            initialValue: 'scheduled',
        }),
    ],
        preview: {
        select: {
            title: 'eventTitle',
            subtitle: 'startDate',
            media: 'coverImage',
        },
        prepare(selection) {
            const {title, subtitle, media} = selection;
            // Format the date nicely for the editor
            const formattedDate = subtitle ? new Date(subtitle).toLocaleDateString() : 'No date set';
            return {
                title: title,
                subtitle: formattedDate,
                media: media
            }
        }
    }
})