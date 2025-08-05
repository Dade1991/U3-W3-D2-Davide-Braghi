interface Art {
  id: Key | null | undefined
  image_url: string | undefined
  title: ReactNode
  summary: ReactNode
  news_site: ReactNode
  published_at: any
  count: number
  next: string
  previous: any
  results: Result[]
}

export default Art

// interface Result {
//   id: number
//   title: string
//   authors: Author[]
//   url: string
//   image_url: string
//   news_site: string
//   summary: string
//   published_at: string
//   updated_at: string
//   featured: boolean
//   launches: Launch[]
//   events: any[]
// }

// export default Result

// interface Author {
//   name: string
//   socials?: Socials
// }

// export default Author

// interface Socials {
//   x: string
//   youtube: string
//   instagram: string
//   linkedin: string
//   mastodon: string
//   bluesky: string
// }

// export default Socials

// interface Launch {
//   launch_id: string
//   provider: string
// }

// export default Launch
