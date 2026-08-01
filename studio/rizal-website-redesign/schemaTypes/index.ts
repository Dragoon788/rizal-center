import { author } from './authorType';
import { homePage } from './corePages/homePage';
import { resource } from './resourceType'
import { resourceList } from './resourceList'
// import SchemaTypeDefintion from "sanity";


// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [
export const schemaTypes = [author, homePage, resource, resourceList]
