export type Products = Product[]

export interface Product {
  type: string
  id: number
  imageSrc: string
  title: string
  subtitle: string
  buttonPosition: string
  titlePosition: string
  isGradient: boolean
  description?: string
  isPopular?: boolean
  rating?: number
  name?: string
  about?: string
  price?: number
  imagesUsers?: ImagesUsers
  isPopularPosition?: string
  isRatingPosition?: string
  imagesPosition?: string
}

export interface ImagesUsers {
  images: string[]
}
