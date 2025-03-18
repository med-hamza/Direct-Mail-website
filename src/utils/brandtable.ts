export interface brandtableData {
    id: number,
    image: string,
    title: string,
    description: string,
    bg: string
}


export const brandTable: brandtableData[] = [
    {
        id: 1,
        image: '/images/shopify_picture.png',
        title: 'Plug-and-play with your stack',
        description: 'Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.',
        bg: 'pointer'
    },
    {
        id: 2,
        image: '/images/campaigns_picture.png',
        title: 'Run campaigns on autopilot',
        description: 'Ink profits while you sleep: Just set it and forget it.',
        bg: 'help'
    },
    {
        id: 3,
        image: '/images/dahsboard_picture.png',
        title: 'Real-time ROI dashboard',
        description: 'Track performance of every postcard by customer or discount code. Your CFO will love it.',
        bg: 'text'
    },
    {
        id: 4,
        image: '/images/longshot_picture.png',
        title: 'Deliver WOW with *real* handwritten cards',
        description: 'Our proprietary robots use real pens and ink for an unforgettable VIP touch.',
        bg: 'grab'
    },
    {
        id: 5,
        image: '/images/pricing_picture.png',
        title: 'Predictable pricing',
        description: 'Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.',
        bg: 'zoom-in'
    },
    {
        id: 6,
        image: '/images/service_picture.png',
        title: 'Complimentary concierge service',
        description: 'DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.',
        bg: 'copy'
    }
]