interface fetchedObj {
  data: {
    objects: [
      {
        names : {
          common: string
        },
        flag: {
          description: string
          url_svg: string
        },
        region: string,
        subregion: string,
        continents: [

        ],
        currencies: [
          {
            code: string,
            name: string,
            symbol: string
          }
        ]
        descriptions: {
          long: string
        },
        languages: [
          {
            name: string
          }
        ],
        links: {
          wikipedia: string
        }
      }
    ]
  }
}


export type { fetchedObj}