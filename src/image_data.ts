type horisontalOptions = 'left' | 'center' | 'right'

type verticalOptions = 'top' | 'center' | 'bottom'

export interface Crop {
  x: horisontalOptions
  y: verticalOptions
}

export interface ImageDatum {
  url: string
  alt: string
  title?: string
  crop: Crop
}

export const IllustrativeImageData: ImageDatum[] = [
  // Row4
  {
    url: '/art-images/9.png',
    alt: 'A "self-portrait" of myself expressing feelings of panic and worry.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/10.png',
    alt: 'A tall figure white figure with trails of a black substance running down their whole body. They seem to be looking up at an unseen source of the substance, them reaching out with one hand to collect it. At the figure’s feet is a large collection of this black substance.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/11.png',
    alt: 'A display of fish-like creatures being fished out of holes by hooks from above. In the background is a black circular object, a kin to the sun in the sky.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row5
  {
    url: '/art-images/12.png',
    alt: 'A leg without a foot having different pieces of itself removed in a geometric fashion. The top and bottom of the leg are wrapped in a ribbon-like bandage.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/13.png',
    alt: 'A headshot of my OC "Grei" with her name written out next to her in a stylized manner.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/14.png',
    alt: 'A headshot of my OC "Auctate" with their name written out next to them in a stylized manner.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row6
  {
    url: '/art-images/15.png',
    alt: 'An odd ham-like creature. Above it, the words "Ham Child" are written in a stylized manner.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/16.png',
    alt: 'A creature wearing shorts and a cropped sweater. She had tentacles where her hands should be and her pupiless eyes seem to emit energy in an "antler-like fashion".',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/17.png',
    alt: 'My OC, "Nidoni", charging at an unknown entity, giant leek at the ready. Different parts of her body are bulked up to aid in her advance.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
]


export const GraphicImageData: ImageDatum[] = [
  // Row1
  {
    url: '/art-images/0.png',
    alt: 'A distressed tiefling woman in front of an elaborate display of glowing orange circles.',
    title: "thing idk",
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/1.png',
    alt: 'A postcard advertising the fictional location known as “Fire Falls”. It includes imagery of red rocks and orange waters',
    crop: {
      x: 'left',
      y: 'center'
    }
  },
  {
    url: '/art-images/2.png',
    alt: 'A fox girl who’s presumably addressed as “Harlem”. She is equipped with giant club-like gauntlets and a matching motorcycle helmet. To her left is an orange cloud that wraps above her. ',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row2
  {
    url: '/art-images/3.png',
    alt: 'An image of my OC "Grei" showing her support for Pride Month and the LGBTQIA+ Community. She’s backed by the "Progress" Pride Flag.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/4.png',
    alt: 'A mostly green baseball card featuring an OC of mine (Nidoni). To the right of the card it reads "A Baseball Card"',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/5.png',
    alt: 'A concept for a comic book series titled "The End Of The Quintilliverse". It’s mostly green and white, and features a person kneeling on the ground in front of a mushroom cloud.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row3
  {
    url: '/art-images/6.png',
    alt: 'A smiling planet and its tiny moon floating in outer space. The planet has a thin white ring around it.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/7.png',
    alt: 'A top heavy blue robot surrounded by the text “Big Robo”. There are wires connected to its hands and back.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/8.png',
    alt: 'A series of four high top sneakers, each being similar in model but different in color scheme. Additionally, each has a small Transgender Pride Flag pin near the top.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/18.png',
    alt: 'A colored self portrait of myself feeing uneasy.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row4
  {
    url: '/art-images/9.png',
    alt: 'A "self-portrait" of myself expressing feelings of panic and worry.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/10.png',
    alt: 'A tall figure white figure with trails of a black substance running down their whole body. They seem to be looking up at an unseen source of the substance, them reaching out with one hand to collect it. At the figure’s feet is a large collection of this black substance.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/11.png',
    alt: 'A display of fish-like creatures being fished out of holes by hooks from above. In the background is a black circular object, a kin to the sun in the sky.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row5
  {
    url: '/art-images/12.png',
    alt: 'A leg without a foot having different pieces of itself removed in a geometric fashion. The top and bottom of the leg are wrapped in a ribbon-like bandage.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/13.png',
    alt: 'A headshot of my OC "Grei" with her name written out next to her in a stylized manner.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/14.png',
    alt: 'A headshot of my OC "Auctate" with their name written out next to them in a stylized manner.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row6
  {
    url: '/art-images/15.png',
    alt: 'An odd ham-like creature. Above it, the words "Ham Child" are written in a stylized manner.',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/art-images/16.png',
    alt: 'A creature wearing shorts and a cropped sweater. She had tentacles where her hands should be and her pupiless eyes seem to emit energy in an "antler-like fashion".',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/art-images/17.png',
    alt: 'My OC, "Nidoni", charging at an unknown entity, giant leek at the ready. Different parts of her body are bulked up to aid in her advance.',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
]
