// Import icons and add schema defining tools
import {InfoOutlineIcon} from '@sanity/icons/InfoOutline'
import {DocumentsIcon} from '@sanity/icons/Documents'
import { defineField, defineType } from "sanity";

// QUESTION:
//// Is it better to build resourcelists or build resources with categories referencing their resourcelist
//// Which is more intuitive?

export const resource = defineType({
    name: "resource",
    type: "object",
    icon: InfoOutlineIcon,
    fields: [
        defineField({
            name: "title",
            title: "Resource Title",
            type: "string",
            placeholder: "Ex: Chicago Immigration Court",
            validation: rule => rule.required().max(100),
        }),
        defineField({
            name: "link",
            type: "url",
            placeholder: "Ex: https://rizalcenter.org",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Resource Description",
            type: "text",
            placeholder: "Write a short description describing what the resource is",
        }),
        defineField({
            name: 'contact_info',
            type: 'string',
            placeholder: 'Ex: (312) 294-8400',
        }),
        defineField({
            name: 'location',
            type: 'reference',
            title: 'Location (optional)', 
            to: [{type: 'location'}],
        })
    ],
});

export const resourceList = defineType({
    name: "resourceList",
    title: "Resource Lists",
    type: "document",
    icon: DocumentsIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            placeholder: "Ex: External Immigration Resources",
            validation: rule => rule.required().max(50),
        }),
        defineField({
            name: 'topic',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'topic'}]}],
            description: 'Topics group related content and help visitors discover events, posts, announcements, and resources around an area of interest.'
        }),
        defineField({
            name: "resources",
            type: "array",
            of: [{type: 'resource'}],
            description: 'Add, edit, or reorder items in this resource collection. Drag items to change their display order on the page.',
            validation: rule => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description (optional)",
            type: "text",
            placeholder: "Write a short description about the resource List.",
        }),
    ],
});