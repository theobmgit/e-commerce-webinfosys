import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './style.scss'
const Filter = ({ setDisplay }) => {
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

  const [brandCheckedState, setBrandCheckedState] = useState(
    new Array(brandName.length).fill(false)
  )
  const [categoryCheckedState, setCategoryCheckedState] = useState(
    new Array(categoryName.length).fill(false)
  )
  const [ratingCheckedState, setRatingCheckedState] = useState(
    new Array(6).fill(false)
  )

  const Brand = brandName.map((b, idx) => {
    return (
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value={b}
          id={b}
          checked={brandCheckedState[idx]}
          onChange={() => {
            brandHandleOnChange(idx)
          }}
        />
        <label className='form-check-label' htmlFor={b}>
          {b}
        </label>
      </div>
    )
  })

  const Category = categoryName.map((c, idx) => {
    return (
      <div className='form-check'>
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
      </div>
    )
  })

  const brandHandleOnChange = (pos) => {
    const updatedCheckedState = brandCheckedState.map((item, idx) =>
      idx === pos ? !item : item
    )
    setBrandCheckedState(updatedCheckedState)
  }
  const categoryHandleOnChange = (pos) => {
    const updatedCheckedState = categoryCheckedState.map((item, idx) =>
      idx === pos ? !item : item
    )
    setCategoryCheckedState(updatedCheckedState)
  }
  const count = (input, arr) => arr.filter((x) => x === input).length

  const handleSubmit = () => {
    console.log(brandFilter)
    console.log(categoryFilter)
    setDisplay(
      products.filter(
        (item) =>
          brandFilter.includes(item.supplier_name) &&
          categoryFilter.includes(item.type_name) &&
          item.price <= priceRange
      )
    )
  }

  useEffect(() => {
    if (count(false, categoryCheckedState) !== categoryCheckedState.length) {
      setCategoryFilter(
        categoryName.filter((item, idx) => categoryCheckedState[idx])
      )
    } else {
      setCategoryFilter(categoryName)
    }
    if (count(false, brandCheckedState) !== brandCheckedState.length) {
      setBrandFilter(brandName.filter((item, idx) => brandCheckedState[idx]))
    } else {
      setBrandFilter(brandName)
    }
  }, [categoryCheckedState, brandCheckedState, brandName, categoryName])

  return (
    <>
      <div className='filter mx-3 my-2'>
        <div className='brand-filter my-2'>
          <div className='filter-name'>Brand</div>
          {Brand}
        </div>
        <div className='category-filter my-2'>
          <div className='filter-name'>Category</div>
          {Category}
        </div>
        <div className='rating-filter my-2'>
          <div className='filter-name'>Rating</div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value={5}
              id='rating5'
              checked={ratingCheckedState[5]}
              onChange={() =>
                setRatingCheckedState(
                  ratingCheckedState.map((s, idx) => (idx === 5 ? !s : s))
                )
              }
            />
            <label className='form-check-label' htmlFor='rating5'>
              <span style={{ color: '#FF9F1C' }}>
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
              onChange={() =>
                setRatingCheckedState(
                  ratingCheckedState.map((s, idx) => (idx === 4 ? !s : s))
                )
              }
            />
            <label className='form-check-label' htmlFor='rating4'>
              <span style={{ color: '#FF9F1C' }}>
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
              onChange={() =>
                setRatingCheckedState(
                  ratingCheckedState.map((s, idx) => (idx === 3 ? !s : s))
                )
              }
            />
            <label className='form-check-label' htmlFor='rating3'>
              <span style={{ color: '#FF9F1C' }}>
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
              onChange={() =>
                setRatingCheckedState(
                  ratingCheckedState.map((s, idx) => (idx === 2 ? !s : s))
                )
              }
            />
            <label className='form-check-label' htmlFor='rating2'>
              <span style={{ color: '#FF9F1C' }}>
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
              onChange={() =>
                setRatingCheckedState(
                  ratingCheckedState.map((s, idx) => (idx === 1 ? !s : s))
                )
              }
            />
            <label className='form-check-label' htmlFor='rating1'>
              <span style={{ color: '#FF9F1C' }}>
                <i className='fas fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
                <i className='far fa-star'/>
              </span>
            </label>
          </div>
        </div>
        <div className='price-range my-2'>
          <div className='filter-name'>Price Range</div>
          <input
            type='range'
            name='priceRange'
            min='0'
            max={maxPrice}
            step='1000000'
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <h4>{priceRange} VND</h4>
        </div>
      </div>
      <div className='btn-container my-3'>
        <button className='btn btn-filter' onClick={() => handleSubmit()}>
          Filter
        </button>
      </div>
    </>
  )
}

export default Filter
