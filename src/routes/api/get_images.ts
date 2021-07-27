import type { EndpointOutput } from '@sveltejs/kit'
import fs from 'fs'
import { join } from 'path'

export type ImagesResponse = string[][]

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(): Promise<EndpointOutput> {
	const art_images_folder_path = 'static/art-images'
	const art_images_folder = await fs.promises.readdir(art_images_folder_path)

	const response: ImagesResponse = []

	for await (const [index,dir] of art_images_folder.entries()) {
		response[index] = (await fs.promises.readdir(join(art_images_folder_path, '/', dir))).map(
            file => join(art_images_folder_path, "/", dir, "/", file)
        )
	}

	return {
		body: response
	}
}
