// Import icons and add schema defining tools
import {DocumentsIcon} from '@sanity/icons/Documents'
import { defineField, defineType } from "sanity";

export const resourceList = defineType({
    name: "resourceList",
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
        of: [{type: 'resource'}],
        validation: rule => rule.required(),
        }),
    ],
});