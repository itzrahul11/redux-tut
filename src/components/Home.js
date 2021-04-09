import React from 'react';

function Home() {

    return (
        <div className="main-container">
            <div className="add-to-cart">
                <img src="https://www.flaticon.com/svg/vstatic/svg/891/891462.svg?token=exp=1617992619~hmac=cd4151e0015db5297e6ed47d8ad4d667" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-warpper">
                <div className="img-wrapper item">
                    <img src="https://wmstatic.global.ssl.fastly.net/ml/7070421-f-a72e6ed0-4bf1-4f3f-afb6-6a34cc5f95b9.png?width=386&height=684" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                </span>
                    <span>
                        Price: $1000.00
                </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;