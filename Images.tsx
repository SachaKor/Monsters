interface Image {
    name: string;
    image: any;
}

class Images {
    private static images: Array<Image> = [
        {
            name: '1.png',
            image: require('./img/1.png')
        },
        {
            name: '2.png', 
            image: require('./img/2.png')
        },
        {
            name: '3.png',
            image: require('./img/3.png')
        }
    ]

    static GetImage = (name: string) => {
        const found = Images.images.find(e => e.name === name);
        return found ? found.image : null;
    }
}


export default Images;