// Import icons and add schema defining tools
import {InfoOutlineIcon} from '@sanity/icons/InfoOutline'
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