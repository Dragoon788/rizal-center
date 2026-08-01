import {MarkerIcon} from '@sanity/icons/Marker'
import { defineField, defineType } from "sanity";

export const location = defineType({
    name: 'location',
    type: 'document',
    icon: MarkerIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            placeholder: 'Ex: Rizal Center',
            validation: rule => rule.required().max(100)
        }),
        defineField({
            name: 'address',
            type: 'string',
            placeholder: 'Ex: 1332 W Irving Park Rd, Chicago, IL 60613',
            validation: rule => rule.required().max(100)
        }),
        // Later define a custom webhook that autogenerates this 
        defineField({
            name: 'geopoint',
            type: 'geopoint',
            readOnly: true,
            hidden: true,
        }),
    ]
})