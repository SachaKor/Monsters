interface Image {
    id: string;
    name: string;
    image: any;
}

class Images {
    private static images: Array<Image> = [
        {
            id: '1',
            name: '1.gif',
            image: require('./img/1.gif')
        },
        {
            id: '2',
            name: '2.gif', 
            image: require('./img/2.gif')
        },
        {
            id: '3',
            name: '3.gif',
            image: require('./img/3.gif')
        }
    ]

    static GetImage = (name: string) => {
        const found = Images.images.find(e => e.name === name);
        return found ? found.image : null;
    }

    static getImages = () => {
        return this.images;
    }
}


export default Images;