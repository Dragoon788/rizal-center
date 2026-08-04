import { author } from './documents/author';
import { homePage } from './singletons/homePage';
import { resource, resourceList } from './documents/resource'
import { location } from './documents/location'
import { blogPost } from './documents/blogPost'
import { event } from './documents/events'


// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [
export const schemaTypes = [author, 
                            homePage, 
                            resource, 
                            resourceList, 
                            location,
                            blogPost,
                            event,]
