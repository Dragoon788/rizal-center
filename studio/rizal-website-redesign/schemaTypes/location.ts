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
        // defineField({
        //     name: 'address',
        //     title: 'Street Address',
        //     type: 'string',
        //     placeholder: 'Ex: 1332 W Irving Park Rd, Chicago, IL 60613',
        //     validation: rule => rule.required().max(100)
        // }),

        defineField({
            name: 'geopoint',
            title: 'Geo Location',
            type: 'geopoint',
        }),
    ]
})