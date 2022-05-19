import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import './style.scss'

const Filter = ({setDisplay}) => {
    let products = useSelector((state) => state.store.products)

    const brand = products.map((item) => {
        return item.supplier_name
    })

    const brandName = brand.reduce((result, element) => {
        return result.includes(element) ? result : [...result, element]
    }, [])

    const category = products.map((item) => {
        return item.type_name
    })

    const categoryName = category.reduce((result, element) => {
        return result.includes(element) ? result : [...result, element]
    }, [])

    const price = products.map((item) => item.price)
    const maxPrice = Math.max(...price)

    const [priceRange, setPriceRange] = useState(maxPrice)
    const [brandFilter, setBrandFilter] = useState(brandName)
    const [categoryFilter, setCategoryFilter] = useState(categoryName)

    const [brandCheckedState, setBrandCheckedState] = useState(new Array(brandName.length).fill(false))
    const [categoryCheckedState, setCategoryCheckedState] = useState(new Array(categoryName.length).fill(false))
    const [ratingCheckedState, setRatingCheckedState] = useState(new Array(6).fill(false))

    console.log(brandCheckedState, categoryCheckedState)
    const Brand = brandName.map((brand, idx) => {
        return (<div className='form-check'>
            <input
                className='form-check-input'
                type='checkbox'
                value={brand}
                id={brand}
                checked={brandCheckedState[idx]}
                onChange={() => {
                    brandHandleOnChange(idx)
                }}
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
                checked={categoryCheckedState[idx]}
                onChange={() => {
                    categoryHandleOnChange(idx)
                }}
            />
            <label className='form-check-label' htmlFor={c}>
                {c}
            </label>
        </div>)
    })

    const brandHandleOnChange = (pos) => {
        console.log("index", pos)
        const updatedCheckedState = brandCheckedState.map((isChecked, idx) => idx === pos ? !isChecked : isChecked)
        console.log("updated", updatedCheckedState)
        setBrandCheckedState(updatedCheckedState)
        console.log(brandCheckedState)
    }

    const categoryHandleOnChange = (pos) => {
        const updatedCheckedState = categoryCheckedState.map((item, idx) => idx === pos ? !item : item)
        setCategoryCheckedState(updatedCheckedState)
        console.log(categoryCheckedState)
    }

    const count = (input, arr) => arr.filter((x) => x === input).length

    const handleSubmit = () => {
        setDisplay(products.filter(item =>
            brandFilter.includes(item.supplier_name) && categoryFilter.includes(item.type_name))
        )
    }

    useEffect(() => {
        if (count(false, categoryCheckedState) !== categoryCheckedState.length) {
            setCategoryFilter(categoryName.filter((item, idx) => categoryCheckedState[idx]))
        } else {
            setCategoryFilter(categoryName)
        }

        if (count(false, brandCheckedState) !== brandCheckedState.length) {
            setBrandFilter(brandName.filter((item, idx) => brandCheckedState[idx]))
        } else {
            setBrandFilter(brandName)
        }
    }, [categoryCheckedState, brandCheckedState])

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
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value={5}
                        id='rating5'
                        checked={ratingCheckedState[5]}
                        onChange={() => setRatingCheckedState(ratingCheckedState.map((s, idx) => (idx === 5 ? !s : s)))}
                    />
                    <label className='form-check-label' htmlFor='rating5'>
              <span style={{color: '#FF9F1C'}}>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
              </span>
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value={4}
                        id='rating4'
                        checked={ratingCheckedState[4]}
                        onChange={() => setRatingCheckedState(ratingCheckedState.map((s, idx) => (idx === 4 ? !s : s)))}
                    />
                    <label className='form-check-label' htmlFor='rating4'>
              <span style={{color: '#FF9F1C'}}>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='far fa-star'/>
              </span>
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value={3}
                        id='rating3'
                        checked={ratingCheckedState[3]}
                        onChange={() => setRatingCheckedState(ratingCheckedState.map((s, idx) => (idx === 3 ? !s : s)))}
                    />
                    <label className='form-check-label' htmlFor='rating3'>
              <span style={{color: '#FF9F1C'}}>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
              </span>
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value={2}
                        id='rating2'
                        checked={ratingCheckedState[2]}
                        onChange={() => setRatingCheckedState(ratingCheckedState.map((s, idx) => (idx === 2 ? !s : s)))}
                    />
                    <label className='form-check-label' htmlFor='rating2'>
              <span style={{color: '#FF9F1C'}}>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
              </span>
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value={1}
                        id='rating1'
                        checked={ratingCheckedState[1]}
                        onChange={() => setRatingCheckedState(ratingCheckedState.map((s, idx) => (idx === 1 ? !s : s)))}
                    />
                    <label className='form-check-label' htmlFor='rating1'>
              <span style={{color: '#FF9F1C'}}>
                <i className='fas fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
              </span>
                    </label>
                </div>
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
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
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
