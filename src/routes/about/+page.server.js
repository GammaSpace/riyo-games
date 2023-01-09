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
            about {
              title,
              description {
                value
              },
              storyHeader,
              story {
                value
              },
              visionHeader,
              vision {
                value
              },
              valuesHeader,
              values {
                value
              },
              careersHeader,
              workWithUs {
                value
              },
              careersButton,
              teamHeader
            },
            allBios {
              name,
              role
              level,
              hp,
              bio {
                value
              },
              portrait {
                url
              },
            },
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      //console.log( res.data );
      return res.data;
    })
    .catch( ( error ) => {
      console.log( error );
    })
  )
}