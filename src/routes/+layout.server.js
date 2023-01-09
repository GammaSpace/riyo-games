import { PUBLIC_DATO_TOKEN } from '$env/static/public';

export const prerender = true;

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
            footer {
              footerContent {
                value
              }
            },
            allSocials {
              title,
              link,
              svg {
                url
              }
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      return res.data;
    })
    .catch( ( error ) => {
      console.log( error );
    })
  )
}