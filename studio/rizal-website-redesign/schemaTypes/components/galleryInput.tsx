import {useRef, useState} from 'react'
import {useClient} from 'sanity'
import {Button, Card, Flex, Stack, Text} from '@sanity/ui'
import imageUrlBuilder from '@sanity/image-url'

export function GalleryInput(props: any) {
    const {value = [], onChange} = props

    const client = useClient({
        apiVersion: '2026-07-28',
    })

    const inputRef = useRef<HTMLInputElement>(null)
    const [uploading, setUploading] = useState(false)

    const builder = imageUrlBuilder(client)

    function urlFor(source: any) {
        return builder.image(source)
    }

    async function uploadFiles(files: FileList) {
        setUploading(true)

        try {
            const uploaded = await Promise.all(
                Array.from(files).map(async (file) => {
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

            onChange([
                ...(value ?? []),
                ...uploaded,
            ])
        } catch (error) {
            console.error('Failed to upload images:', error)
        } finally {
            setUploading(false)
        }
    }

    function removeImage(index: number) {
        const newValue = [...value]
        newValue.splice(index, 1)

        onChange(newValue)
    }

    return (
        <Stack gap={4}>

            {/* Upload button */}
            <Card padding={4} border radius={2}>
                <Stack gap={3}>

                    <Button
                        text={
                            uploading
                                ? 'Uploading...'
                                : 'Upload Images'
                        }
                        disabled={uploading}
                        onClick={() =>
                            inputRef.current?.click()
                        }
                    />

                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        hidden
                        onChange={(event) => {
                            const files = event.target.files

                            if (!files || files.length === 0) {
                                return
                            }

                            uploadFiles(files)

                            // Allows the same file to be selected again
                            event.target.value = ''
                        }}
                    />

                    <Text size={1} muted>
                        {value.length} image
                        {value.length === 1 ? '' : 's'}
                    </Text>

                </Stack>
            </Card>


            {/* Image carousel */}
            {value.length > 0 && (
                <Stack gap={3}>

                    <Text weight="semibold">
                        Gallery
                    </Text>

                    <Card
                        padding={3}
                        border
                        radius={2}
                        style={{
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: '12px',
                                overflowX: 'auto',
                                paddingBottom: '8px',
                            }}
                        >
                            {value.map(
                                (image: any, index: number) => (
                                    <div
                                        key={
                                            image.asset?._ref ??
                                            index
                                        }
                                        style={{
                                            position:
                                                'relative',
                                            flex: '0 0 180px',
                                        }}
                                    >
                                        <img
                                            src={urlFor(image)
                                                .width(360)
                                                .height(240)
                                                .fit('crop')
                                                .url()}
                                            alt={
                                                image.alt ||
                                                `Gallery image ${
                                                    index + 1
                                                }`
                                            }
                                            style={{
                                                width: '180px',
                                                height: '120px',
                                                objectFit:
                                                    'cover',
                                                borderRadius:
                                                    '4px',
                                                display: 'block',
                                            }}
                                        />

                                        <Button
                                            mode="bleed"
                                            tone="critical"
                                            text="×"
                                            fontSize={2}
                                            padding={2}
                                            style={{
                                                position:
                                                    'absolute',
                                                top: '4px',
                                                right: '4px',
                                            }}
                                            onClick={() =>
                                                removeImage(
                                                    index
                                                )
                                            }
                                        />

                                        <Text
                                            size={1}
                                            muted
                                            style={{
                                                display:
                                                    'block',
                                                marginTop:
                                                    '6px',
                                            }}
                                        >
                                            {index + 1}
                                        </Text>
                                    </div>
                                )
                            )}
                        </div>
                    </Card>

                </Stack>
            )}

        </Stack>
    )
}