import { PUBLIC_DATO_TOKEN } from '$env/static/public';

const token = PUBLIC_DATO_TOKEN;

/* @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return (
    fetch(
      'https://graphql.datocms.com/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: `{
            contact {
              title,
              contactHeader,
              description {
                value
              },
              emailHeader,
              emailContent {
                value
              }
              emailContact,
              newsletterHeader,
            }
          }`
        }),
      }
    )
    .then(  ( res ) => res.json() )
    .then(  ( res ) => {
      return res.data.contact;
    })
    .catch( ( err ) => {
      console.log( err );
    })
  )
}