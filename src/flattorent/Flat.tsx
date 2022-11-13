import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {useLoaderData} from "react-router-dom";
import {FlatItem} from "../flats";

function Flat() {
    const {flat} = useLoaderData() as {flat: FlatItem };

    return (<div>
        <Photos/>

        <div className="row mt-5">
            <div className="col-lg-6">
                <h3>{flat.priceText()}, {flat.roomsText()}</h3>
                <p>{flat.description || ''}</p>
            </div>

            <div className="col-lg-6">
                <Map address={flat.address}/>
            </div>
        </div>

    </div>);
}


function Photos() {
    const images = [
        'https://picsum.photos/id/1018/1000/600/', 'https://picsum.photos/id/1015/200/600/', 'https://picsum.photos/id/1019/1000/600/'
    ].map(src => ({original: src, thumbnail: src}));
    return <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>

}

function Map({address}: { address: string }) {
    const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyALSvrD3gdxJ9Rh738LTVhSYD9vMekd0Qk&q=${address}&zoom=15`
    return <iframe title={"map"} src={src} width="100%" height="400"></iframe>
}

export default Flat;
