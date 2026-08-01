import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
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
        (item) => item.getId() != 'homePage'
      ),
    ]);