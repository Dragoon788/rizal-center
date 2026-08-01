import {defineField, defineType} from 'sanity'

export const homePage = defineType({
    name: 'homePage',
    title: 'Home',
    type: 'document',


    preview: {
        prepare() {
        return {
            title: 'Home',
        }
        },
    },

    fields: [
    defineField({
        name: 'hero',
        title: 'Hero Banner',
        type: 'image',
        validation: rule => rule.required(),
    }),
    defineField({
        name: 'description',
        title: 'Site Description',
        type: 'text',
        validation: rule => rule.max(250),
    }),
    // defineField({
    //     name: 'homePin',
    //     title: 'Pinned Message',
    //     type: 'reference',
    //     to: [{type: 'event'}, {type: 'announcement'}, {type: 'blogPost'}],
    // }),
    defineField({
        name: 'resources',
        title: 'Resources',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'resourceList'}]}],
    }),    
    ]
})