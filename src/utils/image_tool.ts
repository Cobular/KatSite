import { promises } from 'fs'
import { join } from 'path'
import Jimp from 'jimp'

async function getAllRawImages(): Promise<string[]> {
  return (await promises.readdir('static/art-images/'))
    .filter((fileName) => fileName.endsWith('.png'))
    .map((fileName) => join('static/art-images', '/', fileName))
}

async function resizeAndConvert(inputPath, scale, quality, outputPath) {
  const file = await Jimp.read(inputPath)
  await file.scale(scale).quality(quality).write(outputPath)
}

async function convertImagePromises(path: string) {
  const outputs = [
    {
      scale: 1,
      quality: 95,
      suffix: '.1_1.jpg'
    },
    {
      scale: 0.75,
      quality: 95,
      suffix: '.3_4.jpg'
    },
    {
      scale: 0.5,
      quality: 95,
      suffix: '.1_2.jpg'
    },
    {
      scale: 0.25,
      quality: 95,
      suffix: '.1_4.jpg'
    },
    {
      scale: 0.1,
      quality: 95,
      suffix: '.1_10.jpg'
    }
  ]

  return outputs.map((output) => {
    return resizeAndConvert(path, output.scale, output.quality, `${path}${output.suffix}`)
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
