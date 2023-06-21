interface Image {
    name: string;
    image: any;
}

class Images {
    private static images: Array<Image> = [
        {
            name: '1.gif',
            image: require('./img/1.gif')
        },
        {
            name: '2.gif', 
            image: require('./img/2.gif')
        },
        {
            name: '3.gif',
            image: require('./img/3.gif')
        }
    ]

    static GetImage = (name: string) => {
        const found = Images.images.find(e => e.name === name);
        return found ? found.image : null;
    }
}


export default Images;