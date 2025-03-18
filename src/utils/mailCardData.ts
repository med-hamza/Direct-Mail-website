export interface mailCardData {
    id: number,
    title: string,
    description: string,
    logo: string
    image: string,
    name: string,
    number: Array<{ num: string }>
}


export const mailCard: mailCardData[] = [

    {
        id: 1,
        name: 'OBVI',
        title: 'How <span class="font-covered font-medium   text-titleColor"> Obvi </span> Drives Profits with Hands-Off Postcard Campaigns',
        description: 'The 🚀 supplements brand wanted to offset high ad costs and reach dormant customers. They scored 1000%+ ROIs.',
        logo: '/images/icones/obvi.png',
        image: '/images/obvi_card.png',
        number: [
            { num: '1468% <br/> <span class="text-text text-sm font-medium"> ROI </span>' },
            { num: '8.59% <br /> <span class="text-text text-sm font-medium"> Conversion Rate </span>' },
            { num: '$73,457 <br/> <span class="text-text text-sm font-medium"> Sales Generated </span>' }
        ]
    },
    {
        id: 2,
        name: 'bulletproof',
        title: '<span class="font-covered font-medium   text-titleColor"> Bulletproof </span> - Unrivalled Creativity and Global Reach',
        description: 'Bulletproof is the worlds largest independent brand agency, driving growth, standout, and fandom for the worlds most desirable brands.',
        logo: '/images/icones/bulletproof_icone.png',
        image: '/images/bulletproof_card.webp',
        number: [
            { num: '2348% <br/><span class="text-text text-sm font-medium"> ROI </span>' },
            { num: '6% <br /> <span class="text-text text-sm font-medium"> Conversion Rate </span>' },
            { num: '$123,70 <br/> <span class="text-text text-sm font-medium"> Sales Generated </span>' }
        ]
    },
    {
        id: 3,
        name: 'boom',
        title: '<span class="font-covered font-medium   text-titleColor"> BoomBeauty </span> - Clean, Multitasking Beauty Solutions',
        description: 'BoomBeauty is a trusted name in the beauty industry, offering clean, nourishing, and multitasking beauty products.',
        logo: '/images/icones/boom_icone.png',
        image: '/images/boom_card.webp',
        number: [
            { num: '800% <br/> <span class="text-text text-sm font-medium"> ROI</span>' },
            { num: '9.67% <br /> <span class="text-text text-sm font-medium"> Conversion Rate </span>' },
            { num: '$55,398 <br/> <span class="text-text text-sm font-medium"> Sales Generated </span>' }
        ]
    },
    {
        id: 4,
        name: 'arbitbaby',
        title: '<span class="font-covered font-medium   text-titleColor"> Orbit Baby </span> - Revolutionizing Parenting with Innovative Strollers',
        description: 'Orbit Baby is a leading brand in the parenting industry, known for its innovative and high-quality strollers and travel systems.',
        logo: '/images/icones/arbitbaby_icone.png',
        image: '/images/orbit_card.webp',
        number: [
            { num: '3490% <br/> <span class="text-text text-sm font-medium"> ROI</span>' },
            { num: '9% <br /> <span class="text-text text-sm font-medium"> Conversion Rate </span>' },
            { num: '$239 <br/> <span class="text-text text-sm font-medium"> Sales Generated </span>' }
        ]
    }

] 