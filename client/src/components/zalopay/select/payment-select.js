import React, {useEffect} from 'react';
import zalopayLogo from '../../../assets/images/zalopay/logo-zalopay.svg';
import "./style.css"
import Header from "../../header";

const PaymentSelect = () => {
    useEffect(() => {
        document.title = "ZaloPay - Thanh Toán QR"
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

    };

    return (
        <>
            <Header/>
            <div className="container">
                <form className='payment-form mx-auto my-5 p-5 bg-white w-75' onSubmit={handleSubmit}>
                    <h1>Vui lòng chọn hình thức thanh toán:</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1"/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Ví <img src={zalopayLogo} alt="ZaloPay logo"
                                    className='img-fluid'/>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Visa, Mastercard, JCB <span className="txtGray">(qua cổng ZaloPay)</span>
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                               value="option3"/>
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            Thẻ ATM <span className="txtGray">(qua cổng ZaloPay)</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-zalopay text-white px-5 fs-4 fw-bold">
                        THANH TOÁN
                    </button>
                </form>
            </div>
        </>
    )
}

export default PaymentSelect
