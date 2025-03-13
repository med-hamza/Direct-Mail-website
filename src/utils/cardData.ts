export interface cardData {
    id: number,
    title: string,
    description: string,
    author: string,
    logo: string,
    testimonial: string,
    reverse: boolean,
    image: string
}

export const card: cardData[] = [
    {
        id: 1,
        title: '<span class="font-covered text-titleColor">Powerful</span><br/> acquisition<br/> & retention',
        description: 'Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.',
        author: 'Ash Melwani, CMO',
        testimonial: 'It’s like Klaviyo for direct mail. The results are absolutely insane.',
        logo: '/images/icones/obvi.png',
        reverse: false,
        image: '/images/ovbi-card.webp'
    },
    {
        id: 2,
        title: '<span class="font-covered text-titleColor">Fight back </span> against iOS<br/> updates, jacked-up<br/> CPCs & spam folders',
        description: 'Deliver your message to all of your customers — for less than the cost of a click.',
        author: 'Leah Keith, GM',
        testimonial: 'MailMagnet is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.    ',
        logo: '/images/icones/overlander.png',
        reverse: true,
        image: '/images/overlander-card.jpg'
    },
    {
        id: 3,
        title: 'Done for <span class="font-covered text-titleColor"> you </span>',
        description: 'From design & strategy to stamp-licking, our ecom experts help you every step of the way.',
        author: 'Holly Davies, Marketing Director',
        testimonial: 'The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.',
        logo: '/images/icones/paragon.png',
        reverse: false,
        image: '/images/ovbi-card.webp'
    }
]