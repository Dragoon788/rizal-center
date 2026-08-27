// Import icons and add schema defining tools
import {UsersIcon} from '@sanity/icons/Users'
import { defineField, defineType } from "sanity";

export const profile = defineType({
    name: "profile",
    title: "People",
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
            name: "profile_image",
            type: "image",
            options: {
                hotspot: true
            },
        }),
        defineField({
            name: "bio",
            type: "text",
            placeholder: "Write a short description about yourself!",
        }),
    ],
});

