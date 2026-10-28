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

        ]
      }
    ]
  }
}


export type { fetchedObj}