export type Photo = {
  // Photo ID (unique). It will also become the URL slug.
  id: number | string
  // Photo title
  title: string
  // Photo URL (can be absolute or relative to the public folder)
  url: string
  // Photo description
  description: string
}

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Kara xd',
    description:
      "Kara krézi",
    url: '/assets/img2.jpg',
  },
  {
    id: 2,
    title: 'szakallas srac itt',
    description:
      "bro",
    url: '/assets/img1.jpg',
  },
  {
    id: 3,
    title: 'sracaim',
    description:
      "NYOMOD",
    url: '/assets/img3.jpg',
  }
]