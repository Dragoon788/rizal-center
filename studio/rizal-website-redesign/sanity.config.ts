import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {googleMapsInput} from '@sanity/google-maps-input'


export default defineConfig({
    name: 'default',
    title: 'Rizal Website Redesign',

    projectId: 'h5zeeair',
    dataset: 'production',

    // Maybe fix apiKey later so that it is stored as a local variable
    plugins: [structureTool({structure: structure}), 
              visionTool(),
              googleMapsInput({
                apiKey: `${process.env.SANITY_STUDIO_GOOGLE_API_KEY}`,
                defaultLocation: {lat: 41.954590, lng: -87.663531},
                defaultZoom: 15,
              })],

    schema: {
      types: schemaTypes,
    },
})
