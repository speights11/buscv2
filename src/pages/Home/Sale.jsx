import React from "react";

import "../../App.scss";

const Sale = () => {

    return (
        <>
            <div className="sale-div">
                <div className="sale-cell">
                    <div className="sale-title">2025</div>
                    <div className="sale-title">Summer Sale</div>
                </div>
                <div className="sale-cell">
                    <div className="sale-body">All art pieces</div>
                    <div className="sale-body">up to 25% off!</div>
                </div>
                <div className="sale-disclaimer">Sale prices valid on orders completed by Midnight, Aug 31, 2025.</div>
            </div>
        </>
    );
};

export default Sale;
