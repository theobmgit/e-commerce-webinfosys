import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './style.scss'
import {removeArrayByValue} from "../../../utils/removeArrayByValue";

const Filter = ({setDisplay}) => {
    let products = useSelector((state) => state.store.products)

    const brand = products.map(item => item.supplier_name)
    const brandName = brand.reduce((result, element) => {
        return result.includes(element) ? result : [...result, element]
    }, [])
    const category = products.map(item => item.type_name)
    const categoryName = category.reduce((result, element) => {
        return result.includes(element) ? result : [...result, element]
    }, [])
    const rating = [5, 4, 3, 2, 1, 0]
    const price = products.map(item => item.price)
    const maxPrice = Math.max(...price)

    const [brandFilter, setBrandFilter] = useState([])
    const [categoryFilter, setCategoryFilter] = useState([])
    const [ratingFilter, setRatingFilter] = useState([])
    const [priceRange, setPriceRange] = useState(maxPrice)

    const handleOnChange = (arr, filterArr, setFilterArr, pos) => {
        if (filterArr.includes(arr[pos])) {
            setFilterArr(removeArrayByValue(filterArr, arr[pos]))
        } else setFilterArr([filterArr, arr[pos]])
    }

    const handleSubmit = () => {
        setDisplay(products.filter(item =>
            brandFilter.includes(item.supplier_name) ||
            categoryFilter.includes(item.type_name) ||
            ratingFilter.includes(item.rating) ||
            item.price <= priceRange
        ))
    }

    const Brand = brandName.map((brand, idx) => {
        return (<div className='form-check'>
            <input
                className='form-check-input'
                type='checkbox'
                value={brand}
                id={brand}
                onChange={() => handleOnChange(brandName, brandFilter, setBrandFilter, idx)}
            />
            <label className='form-check-label' htmlFor={brand}>
                {brand}
            </label>
        </div>)
    })

    const Category = categoryName.map((c, idx) => {
        return (<div className='form-check'>
            <input
                className='form-check-input'
                type='checkbox'
                value={c}
                id={c}
                onChange={() => handleOnChange(categoryName, categoryFilter, setCategoryFilter, idx)}
            />
            <label className='form-check-label' htmlFor={c}>
                {c}
            </label>
        </div>)
    })

    const Rating = rating.map((item, index) => {
        let stars = [];
        for (let i = 0; i < item; i++)
            stars.push(<i key={i} aria-hidden={true} className='fas fa-star'/>)
        for (let i = item + 1; i < rating.length; i++)
            stars.push(<i key={i} aria-hidden={true} className='far fa-star'/>)

        return (
            <div className='form-check'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    value={item}
                    id={`rating${item}`}
                    onChange={() => {
                        handleOnChange(rating, ratingFilter, setRatingFilter, index)
                    }}
                />
                <label className='form-check-label' htmlFor={`rating${item}`}>
              <span style={{color: '#FF9F1C'}}>
                  {stars}
              </span>
                </label>
            </div>
        )
    })

    return (<>
        <div className='filter mx-3 my-2'>
            <div className='brand-filter my-2'>
                <div className='fs-3 mb-2'>Brand</div>
                {Brand}
                <hr/>
            </div>
            <div className='category-filter my-2'>
                <div className='fs-3 mb-2'>Category</div>
                {Category}
                <hr/>
            </div>
            <div className='rating-filter my-2'>
                <div className='fs-3 mb-2'>Rating</div>
                {Rating}
                <hr/>
            </div>
            <div className='price-range my-2'>
                <div className='fs-3 mb-2'>Price</div>
                <input
                    type='range'
                    name='priceRange'
                    min='0'
                    max={maxPrice}
                    step='1000000'
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                />
                <div className='fs-4'>${priceRange}</div>
                <hr/>
            </div>
        </div>
        <div className='d-flex justify-content-center align-self-center my-3'>
            <button className='btn btn-filter fs-4' onClick={() => handleSubmit()}>
                Filter
            </button>
        </div>
    </>)
}

export default Filter
