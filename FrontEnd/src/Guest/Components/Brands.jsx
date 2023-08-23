import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Brand() {
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get(`${AppRoute}api/get-all-brands`)
            .then(json => setbrands(json.data.brands))
            .catch(err => alert(err.message))
    }, [])




    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">All  Brands for you in one platform</small>
            </div>

            <div className="row my-5">
                {
                    brands.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}