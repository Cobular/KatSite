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
    url: '/art-images/0.png',
    alt: 'Demon Girl',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/1.png',
    alt: 'Waterfall',
    crop: {
      x: 'left',
      y: 'center'
    }
  },
  {
    url: '/art-images/2.png',
    alt: 'Gloves',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row2
  {
    url: '/art-images/3.png',
    alt: 'Pride Month',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/4.png',
    alt: 'Baseball Card',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/5.png',
    alt: 'Quintiverse',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row3
  {
    url: '/art-images/6.png',
    alt: 'Pride Month',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/7.png',
    alt: 'Baseball Card',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/8.png',
    alt: 'Quintiverse',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row4
  {
    url: '/art-images/9.png',
    alt: 'Stressed',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/10.png',
    alt: 'Despair',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/11.png',
    alt: 'Ether',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row5
  {
    url: '/art-images/12.png',
    alt: 'Leg',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/13.png',
    alt: 'Grei Doodle',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/14.png',
    alt: 'Auctate',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row6
  {
    url: '/art-images/15.png',
    alt: 'Ham Child',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/16.png',
    alt: 'Fervor',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/17.png',
    alt: 'Nidoni',
    crop: {
      x: 'center',
      y: 'top'
    }
  }
]
