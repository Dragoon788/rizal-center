import type { StructureResolver } from "sanity/structure";

// Define documents we want to hide from user
const hiddenTypes = ['homePage', 'resource', 'location']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Site Contents')
    .items([
      S.listItem()
        .title('Core Pages')
        .child(
          S.list()
          .title('Core Page Documents')
          .items([
            S.listItem()
            .title('Homepage')
            .child(S.document().schemaType('homePage').documentId('homePage')),
          ])
        ),
      ...S.documentTypeListItems().filter(
        (item) => !hiddenTypes.includes(item.getId()!)
      ),
    ]);