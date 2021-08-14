import React from 'react'
const Breadcrumb = (props) => {
    return(
        <div className="breacrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text product-more">
                            <a href="/"><i className="fa fa-home"></i> Home</a>
                            <span>{props.children}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;