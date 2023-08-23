import React from 'react'
import UserCards from '../Components/UserCards'

export default function Category() {
    const data = [
        {
            "_id": "64e6258ae45a20f7e664aecc",
            "CategoryName": "category-image",
            "CategoryImage": "dummy",
            "__v": 0
        },
        {
            "_id": "64e62660e45a20f7e664aed2",
            "CategoryName": "Fried-Item",
            "CategoryImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thedailymeal.com%2Fimg%2Fgallery%2Fhow-to-fry-food-at-home%2Fdreamstime_xxl_0.jpg&tbnid=6RwrMqY104S2nM&vet=12ahUKEwjhvYDpjPOAAxVSrycCHYBWA1sQMyg0egUIARDVAQ..i&imgrefurl=https%3A%2F%2Fwww.thedailymeal.com%2Fcook%2Fhow-to-fry-food-at-home-tips&docid=RzXSaaXD0CfhuM&w=780&h=554&q=Fried%20Item&ved=2ahUKEwjhvYDpjPOAAxVSrycCHYBWA1sQMyg0egUIARDVAQ",
            "__v": 0
        },
    ]

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Explore the product by category! choose what's best for you</small>
            </div>

            <div className="row my-5">
                {
                    data.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}
