import React from 'react';

interface ImageCardProps {
    image: any;
}


class ImageCard extends React.Component<ImageCardProps, any>{
    private imageRef: React.RefObject<HTMLImageElement>;


    constructor(props:ImageCardProps) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef.current!.clientHeight);
        this.imageRef.current!.addEventListener('load',this.setSpans);
    }

    setSpans = () =>{
        console.log(this.imageRef.current!.clientHeight);
    }



    render(){
        const {description, urls} = this.props.image;


        return(
            <div>
                <img ref={this.imageRef}
                    alt={description}
                     src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;