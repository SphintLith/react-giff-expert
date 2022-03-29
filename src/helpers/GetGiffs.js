
export const getGiff = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=2RO7hwlvvMJNJjtqsK3wWlCwvx4ci4ez`
  const response = await fetch(url)
  const { data } = await response.json()
  return data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
}