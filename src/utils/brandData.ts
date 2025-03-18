

export interface brandData {

    id: number,
    title: string,
    picture: string,
    name: string,
    link: string
}

export const brand: brandData[] = [

    {
        id: 1,
        title: '/images/rungum-logo.png',
        picture: '/images/RunGum.webp',
        name: 'rungum',
        link: 'https://rungum.com/'


    },
    {
        id: 2,
        title: '/images/beardbrand-logo.png',
        picture: '/images/beadbrand.webp',
        name: 'beardbrand',
        link: 'https://www.beardbrand.com/'

    },
    {
        id: 3,
        title: '/images/promix-logo.png',
        picture: '/images/promix-nutrition.webp',
        name: 'promix',
        link: 'https://promixnutrition.com/'

    },
    {
        id: 4,
        title: '/images/scothcporter-logo.png',
        picture: '/images/scotch-porter.webp',
        name: 'scothcporter',
        link: 'https://www.scotchporter.com/'
    }

] 