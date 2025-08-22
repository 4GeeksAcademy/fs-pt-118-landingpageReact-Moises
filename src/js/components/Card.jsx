import React from "react";

const Card = () => {
    return (

        <div className="mt-3 col-sm-12 col-md-6 col-lg-3">
            
                <div className="card">
                    <img src="https://picsum.photos/150" className= "object-fit-contain rounded mt-2"alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text  ms-2 text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary w-50 ms-5">Find Out More!</a>
                    </div>
                </div>
            
        </div>
    )
}
export default Card