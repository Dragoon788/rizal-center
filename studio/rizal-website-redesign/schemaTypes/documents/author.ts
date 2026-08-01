// Import icons and add schema defining tools
import {UsersIcon} from '@sanity/icons/Users'
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    type: "document",
    icon: UsersIcon,
    fields: [
        defineField({
            name: "name",
            type: "string",
            placeholder: "Ex: Francis Velasco",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "bio",
            type: "text",
            placeholder: "Write a short description about yourself!",
            validation: rule => rule.max(250),
        }),
        defineField({
            name: "profile_image",
            type: "image",
        }),
    ],
});

