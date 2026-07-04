import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const API_BASE = 'https://api.helenaspa.lk/v1'

  try {
    const data = await $fetch<{ items?: Array<{ _id: string }> }>(
      `${API_BASE}/store/get-items-user`
    )

    const items = data?.items ?? (Array.isArray(data) ? data : [])

    const shopUrls = items.map((item: { _id: string }) => ({
      loc: `/shop/${item._id}`,
      changefreq: 'weekly',
      priority: 0.7,
    }))

    return shopUrls
  } catch {
    // If the API is unreachable (e.g. during build), return an empty list
    return []
  }
})
