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
          id
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

export async function loadJob(id) {
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `
      query Job ($id: ID!){
        job(id: $id) {
          title
          id
          company {
            id
            name
          }
          description
        }
      }
      `,
      variables: { id }
    })
  })

  const responseBody = await response.json()
  return responseBody.data.job
}
