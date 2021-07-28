type horisontalOptions = 'left' | 'center' | 'right'

type verticalOptions = 'top' | 'center' | 'bottom'

export interface Crop {
  x: horisontalOptions
  y: verticalOptions
}

export interface ImageDatum {
  url: string
  alt: string
  crop: Crop
}

export const ImageData: ImageDatum[] = [
  // Row1
  {
    url: '/art-images/row1/1.png',
    alt: 'Demon Girl',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/row1/2.png',
    alt: 'Waterfall',
    crop: {
      x: 'left',
      y: 'center'
    }
  },
  {
    url: '/art-images/row1/3.png',
    alt: 'Gloves',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row2
  {
    url: '/art-images/row2/1.png',
    alt: 'Pride Month',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/row2/2.png',
    alt: 'Baseball Card',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/row2/3.png',
    alt: 'Quintiverse',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row3
  {
    url: '/art-images/row3/1.png',
    alt: 'Pride Month',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/row3/2.png',
    alt: 'Baseball Card',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/row3/3.png',
    alt: 'Quintiverse',
    crop: {
      x: 'center',
      y: 'center'
    }
  }
]
