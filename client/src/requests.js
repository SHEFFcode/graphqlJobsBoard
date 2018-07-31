const URL = 'http://localhost:9000/graphql'

export async function loadJobs() {
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `
      {
        jobs {
          title
          company {
            name
          }
        }
      }
      `
    })
  })

  const responseBody = await response.json()
  return responseBody.data.jobs
}
