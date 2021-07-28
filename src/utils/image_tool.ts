// Prodiuces a original, large (1000 in longest dim) and small (600 in longest dim) vesion of the images.
// Origional will be used for all those larger than the given size

import { promises } from 'fs'
import { join } from 'path'
import Jimp from 'jimp'
import type { ImageCallback } from "@jimp/core/types";

async function getAllRawImages(): Promise<string[]> {
  return (await promises.readdir('static/art-images/'))
    .filter((fileName) => fileName.endsWith('.png'))
    .map((fileName) => join('static/art-images', '/', fileName))
}

async function resizeAndConvert(inputPath, scale, quality, outputPath) {
  const file = await Jimp.read(inputPath)
  // Origional Size
  if (scale === undefined) {
    return file.quality(quality).write(outputPath)
  }
  // Scaled sizes
  // Width is greater, try to set it to scale and keep height on auto
  if (file.getWidth() >= file.getHeight()) {
    // If the width is less than the target, just ouput the origional
    if (file.getWidth() < scale) return file.quality(quality).write(outputPath)
    // Otherwise, output the scaled thing
    return file.resize(scale, Jimp.AUTO).quality(quality).write(outputPath)
  } else {
    // If the height is less than the target, just ouput the origional
    if (file.getHeight() < scale) return file.quality(quality).write(outputPath)
    // Otherwise, output the scaled thing
    return file.resize(Jimp.AUTO, scale).quality(quality).write(outputPath)
  }
}

async function convertImagePromises(path: string) {
  const outputs = [
    {
      maxSize: undefined,
      quality: 95,
      suffix: '.origional.jpg'
    },
    {
      maxSize: 1000,
      quality: 95,
      suffix: '.large.jpg'
    },
    {
      maxSize: 600,
      quality: 95,
      suffix: '.small.jpg'
    }
  ]

  return outputs.map((output) => {
    return resizeAndConvert(path, output.maxSize, output.quality, `${path}${output.suffix}`)
  })
}

async function main() {
  const images = await getAllRawImages()

  await Promise.all(
    images
      .map((image) => {
        return convertImagePromises(image)
      })
      .flat()
  )
}

main()
