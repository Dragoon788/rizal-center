import {ImagesIcon} from '@sanity/icons/Images';
import {defineType, defineField} from 'sanity';

import {GalleryInput} from '../components/galleryInput'

export const gallery = defineType({
    name: 'gallery',
    type: 'document',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required().max(150),
        }),
        defineField({
        name: 'photos',
        type: 'array',
        of: [
            {
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                name: 'alt',
                type: 'string',
                },
                {
                name: 'caption',
                type: 'string',
                },
            ],
            },
        ],

        components: {
            input: GalleryInput,
        },
        }),
    ],
})