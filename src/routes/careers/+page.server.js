import { PUBLIC_DATO_TOKEN } from '$env/static/public';

const token = PUBLIC_DATO_TOKEN;

/* @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return {
    content: fetch(
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
            careersModel {
              title,
              description {
                value
              },
              deiHeader,
              diversityInclusion {
                value
              },
              improvementHeader,
              commitmentToImprovement {
                value
              }
            }
          }`
        }),
      }
    )
    .then(  ( res ) => res.json() )
    .then(  ( res ) => {
      return res.data.careersModel;
    })
    .catch( ( err ) => {
      console.log( err );
    }),

    jobs: fetch( "https://api.collage.co/v1/positions/riyogames" )
    .then(  ( res ) => res.json() )
    .then(  ( res ) => {
      return res.positions;
    })
    .catch( ( err )  => console.log( err ) )
  }
}