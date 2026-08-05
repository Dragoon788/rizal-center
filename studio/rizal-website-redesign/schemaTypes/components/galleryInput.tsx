import { useClient } from 'sanity'
import {set} from 'sanity'
import {Button, Card, Stack} from '@sanity/ui'
import {useRef} from 'react'

// const GalleryProps = {
//     value: Array,
//     onChange: () => any
// }

export function GalleryInput(props : any) {
    const {value = [], onChange} = props

    const client = useClient({apiVersion: '2026-07-28'})

    const inputRef = useRef<HTMLInputElement>(null)

    async function uploadFiles(files: FileList) {

        const uploaded = await Promise.all(

            [...files].map(async (file) => {

                const asset = await client.assets.upload(
                    'image',
                    file
                )

                return {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: asset._id,
                    },
                }
            })

        )

        onChange(
            set([
                ...value,
                ...uploaded,
            ])
        )
    }

    return (
        <Stack space={4}>

            <Card padding={4} border radius={2}>

                <Button
                    text="Upload Images"
                    onClick={() => inputRef.current?.click()}
                />

                <input
                    hidden
                    multiple
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e) => {

                        if (!e.target.files) return

                        uploadFiles(e.target.files)

                    }}
                />

            </Card>

        </Stack>
    )
}