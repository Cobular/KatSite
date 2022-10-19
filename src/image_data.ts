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
  // Row 1
  {
    url: '/illustration/01_Decending_3.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'bottom'
    }
  },
  {
    url: '/illustration/02_Descending_1.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'bottom'
    }
  },
  {
    url: '/illustration/03_Descending_2.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 2
  {
    url: '/illustration/04_Desolate_Transfer_3.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/illustration/05_stretched_cat.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/06_Grei_cute_half_body_2hr.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 3
  {
    url: '/illustration/07_grei_upgreide_bg_2.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/illustration/09_tentacle_mind_shadowless.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/10_FutureModern_Harlem.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 4
  {
    url: '/illustration/11_eversnow_full.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/illustration/12_cleric_cleric.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/13_the_rot.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 5
  {
    url: '/illustration/14_distressing_Infatuation.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'bottom'
    }
  },
  {
    url: '/illustration/15_Willow_1.0_Character_Sheet.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/16_shoe_quad.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 6
  {
    url: '/illustration/17_yup.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'bottom'
    }
  },
  {
    url: '/illustration/18_tex_kirby_1.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/19_willow_possessed.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 7
  {
    url: '/illustration/20_eversnow_sketch.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/illustration/21_FutureModern_Harlem_sketch_and_concept.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/22_fervour_still_lineart.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 8
  {
    url: '/illustration/23_ink_cover.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/illustration/24_Grei_Sketch_On_New_PC.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/25_foofl.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 9
  {
    url: '/illustration/26_walrus_dough_dimmadome.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'bottom'
    }
  },
  {
    url: '/illustration/27_hades_div_sho_3x_prep.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/illustration/28_kathrine_supervisor_lineart.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  // Row 10
  {
    url: '/illustration/29_wacky_tea_party_sketch_lineart.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'bottom'
    }
  },
]


export const GraphicImageData: ImageDatum[] = [
  // Row1
  {
    url: '/graphics/01_Sponsor_Deck_Cover.png',
    alt: '',
    title: "thing idk",
    crop: {
      x: 'right',
      y: 'center'
    }
  },
  {
    url: '/graphics/02_TGEX_22_Style_Guide.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/graphics/03_TGEX_2022_EP_Cover.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row 2
  {
    url: '/graphics/04_Panel_VA_Genshin_1920x1080.png',
    alt: '',
    title: "thing idk",
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/graphics/05_TGEX_21_Discord_Server_Picture.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/graphics/06_Apex_Stream_Overlay_Rehaul.png',
    alt: '',
    crop: {
      x: 'left',
      y: 'center'
    }
  },
  // Row 3
  {
    url: '/graphics/07_APEX_Tourney_Start_Screen.png',
    alt: '',
    title: "thing idk",
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  {
    url: '/graphics/08_div_sho_title_graphic_colored_no_drop_shadow.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/graphics/09_div_sho_logo_preview_2.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row 4
  {
    url: '/graphics/10_Experimental_Font_Sets_Kat.png',
    alt: '',
    title: "thing idk",
    crop: {
      x: 'right',
      y: 'center'
    }
  },
  {
    url: '/graphics/11_Divisions_and_partners.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/graphics/12_PRIDE_BANNER.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'center'
    }
  },
  // Row 5
  {
    url: '/graphics/13_PRIDE_ICON_3.png',
    alt: '',
    title: "thing idk",
    crop: {
      x: 'right',
      y: 'center'
    }
  },
  {
    url: '/graphics/14_Cross_Campus_College_Class_Point_Tracker.png',
    alt: '',
    crop: {
      x: 'center',
      y: 'top'
    }
  },
  {
    url: '/graphics/15_Fall_21_Recruitment_Flyer_Final.png',
    alt: '',
    crop: {
      x: 'left',
      y: 'center'
    }
  },
]
