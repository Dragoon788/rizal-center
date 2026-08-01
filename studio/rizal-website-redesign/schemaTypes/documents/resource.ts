// Import icons and add schema defining tools
import {InfoOutlineIcon} from '@sanity/icons/InfoOutline'
import {DocumentsIcon} from '@sanity/icons/Documents'
import { defineField, defineType } from "sanity";

export const resource = defineType({
    name: "resource",
    type: "document",
    icon: InfoOutlineIcon,
    fields: [
        defineField({
            name: "title",
            title: "Resource Title",
            type: "string",
            placeholder: "Ex: Alliance of Filipinos for Immigrant Rights and Empowerment (AFIRE) Chicago",
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
            placeholder: "Write a short description describing the resource.",
        }),
        defineField({
            name: 'location',
            type: 'reference',
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
            title: "Resource List Title",
            type: "string",
            placeholder: "Ex: External Immigration Resources",
            validation: rule => rule.required().max(50),
        }),
        defineField({
            name: "description",
            title: "Resource List Description",
            type: "text",
            placeholder: "Write a short description describing the resource.",
        }),
        defineField({
            name: "resources",
            type: "array",
            of: [{type: 'reference', to: [{type: 'resource'}]}],
            validation: rule => rule.required(),
        }),
    ],
});