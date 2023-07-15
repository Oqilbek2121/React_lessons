import React from "react";

const Card = () => {
    return (
        <div class="card p-2 m-4" style={{width: 500}}>
            <div class="card-body">
                <h1 className="card-title">Title</h1>
                <p className="card-text">Info</p>
            </div>
        </div>
    );
};

export default Card