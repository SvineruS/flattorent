import React from 'react';
import { Link } from 'react-router-dom';
import {FlatItem, flats} from "../flats";


function FlatList() {
    return (
      <div className="row">
          {
              Object.values(flats).map(flat => <Flat key={flat.id} flat={flat}/>)
          }
      </div>
    );
}


function Flat({flat}: { flat: FlatItem }) {

    return (
      <div className="col-md-6 col-lg-4 mt-5">
          <div className="card border-0">
              <Link to={"flat/" + flat.id}>
                  <img className="card-img-top scale-on-hover" src={`${process.env.PUBLIC_URL}/images/${flat.id}/thumb.jpg`} alt={flat.address}/>
                  <div className="card-body">
                      <h6>{flat.address}</h6>
                      <p className="text-muted card-text">{flat.priceText()}. {flat.roomsText()}</p>
                  </div>
              </Link>
          </div>
      </div>
    );
}


export default FlatList;
