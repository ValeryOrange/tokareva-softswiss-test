// mock server data for main page
const cardsData = [
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xblue-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xblue-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xblue-nebula.png`,
        },
        title: 'Move the borders of reality',
        caption: 'Go on a space adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xbrown-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xbrown-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xbrown-nebula.png`,
        },
        title: 'Space is not just stars and planets',
        caption: 'It is a majestic journey to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xmilky-way.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xmilky-way.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xmilky-way.png`,
        },
        title: 'For those who dream of stars',
        caption: 'Our offer: make your dream come true',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xpink-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xpink-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xpink-nebula.png`,
        },
        title: 'Fulfill your fantastic dreams',
        caption: 'Space has never been so close',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xblue-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xblue-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xblue-nebula.png`,
        },
        title: 'Move the borders of reality',
        caption: 'Go on a space adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xbrown-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xbrown-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xbrown-nebula.png`,
        },
        title: 'Space is not just stars and planets',
        caption: 'It is a majestic journey to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xmilky-way.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xmilky-way.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xmilky-way.png`,
        },
        title: 'For those who dream of stars',
        caption: 'Our offer: make your dream come true',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xpink-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xpink-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xpink-nebula.png`,
        },
        title: 'Fulfill your fantastic dreams',
        caption: 'Space has never been so close',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xblue-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xblue-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xblue-nebula.png`,
        },
        title: 'Move the borders of reality',
        caption: 'Go on a space adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xbrown-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xbrown-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xbrown-nebula.png`,
        },
        title: 'Space is not just stars and planets',
        caption: 'It is a majestic journey to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xblue-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xblue-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xblue-nebula.png`,
        },
        title: 'Move the borders of reality',
        caption: 'Go on a space adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xbrown-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xbrown-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xbrown-nebula.png`,
        },
        title: 'Space is not just stars and planets',
        caption: 'It is a majestic journey to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xmilky-way.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xmilky-way.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xmilky-way.png`,
        },
        title: 'For those who dream of stars',
        caption: 'Our offer: make your dream come true',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xpink-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xpink-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xpink-nebula.png`,
        },
        title: 'Fulfill your fantastic dreams',
        caption: 'Space has never been so close',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xblue-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xblue-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xblue-nebula.png`,
        },
        title: 'Move the borders of reality',
        caption: 'Go on a space adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xbrown-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xbrown-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xbrown-nebula.png`,
        },
        title: 'Space is not just stars and planets',
        caption: 'It is a majestic journey to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xmilky-way.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xmilky-way.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xmilky-way.png`,
        },
        title: 'For those who dream of stars',
        caption: 'Our offer: make your dream come true',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xpink-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xpink-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xpink-nebula.png`,
        },
        title: 'Fulfill your fantastic dreams',
        caption: 'Space has never been so close',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xblue-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xblue-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xblue-nebula.png`,
        },
        title: 'Move the borders of reality',
        caption: 'Go on a space adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
    {
        id: `${Math.random() * Math.random()}`,
        images: {
            '1x': `${process.env.PUBLIC_URL}/assets/1xbrown-nebula.png`,
            '2x': `${process.env.PUBLIC_URL}/assets/2xbrown-nebula.png`,
            '4x': `${process.env.PUBLIC_URL}/assets/4xbrown-nebula.png`,
        },
        title: 'Space is not just stars and planets',
        caption: 'It is a majestic journey to',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet vestibulum lectus, et venenatis odio molestie in. Quisque sollicitudin ligula vitae quam porta, ac ornare neque dignissim. Integer massa sem, pulvinar luctus orci sit amet, interdum congue lacus. Aenean eget blandit arcu. Maecenas non bibendum nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin. Nulla ac faucibus ex.',
    },
];

const cardsTitle = 'Offer';

const cards = {
    title: cardsTitle,
    items: cardsData,
};

const content = {
    title: 'Embark on a space journey',
    description: `
        Travelling into space is one of the most exciting and
        unforgettable adventures that can change your life forever.
        And if you have ever dreamed of exploring stars, planets and
        galaxies, then our company is ready to help you realize this
        dream. We offer a unique experience that will allow you to
        go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be
        filled with incredible impressions, excitement and new
        discoveries. Our team of professionals takes care of your
        safety and comfort so that you can fully enjoy your
        adventure in space. We offer various options for space
        excursions.`,
    collapsible: [
        {
            id: `${Math.random() * Math.random()}`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut eget ullamcorper mi. Nam enim odio, laoreet in porta
            vitae, porttitor in leo. Aenean euismod enim ac semper
            vehicula. Mauris aliquet vestibulum lectus, et venenatis
            odio molestie in. Quisque sollicitudin ligula vitae quam
            porta, ac ornare neque dignissim. Integer massa sem,
            pulvinar luctus orci sit amet, interdum congue lacus.
            Aenean eget blandit arcu. Maecenas non bibendum nibh.
            Phasellus facilisis ipsum id ipsum consequat
            sollicitudin. Nulla ac faucibus ex.`,
        },
        {
            id: `${Math.random() * Math.random()}`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut eget ullamcorper mi. Nam enim odio, laoreet in porta
            vitae, porttitor in leo. Aenean euismod enim ac semper
            vehicula. Mauris aliquet vestibulum lectus, et venenatis
            odio molestie in. Quisque sollicitudin ligula vitae quam
            porta, ac ornare neque dignissim. Integer massa sem,
            pulvinar luctus orci sit amet, interdum congue lacus.
            Aenean eget blandit arcu. Maecenas non bibendum nibh.
            Phasellus facilisis ipsum id ipsum consequat
            sollicitudin. Nulla ac faucibus ex.`,
        },
    ],
};

export const homePageData = {
    cards,
    content,
};
