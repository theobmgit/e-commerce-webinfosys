import React, {useEffect} from 'react'
import NewWindow from 'react-new-window'

const PaymentSelect = () => {
    useEffect(() => {
        document.title = "ZaloPay - Thanh Toán QR"
    }, [])

    return (
        <NewWindow>
            <form>
                <h1>Vui lòng chọn hình thức thanh toán:</h1>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                           value="option1"/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Ví <img src="/src/assets/images/zalopay/logo-zalopay.svg" alt=""/>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                           value="option2"/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Visa, Mastercard, JCB <span className="txtGray">(qua cổng ZaloPay)</span>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                           value="option3"/>
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        Thẻ ATM <span className="txtGray">(qua cổng ZaloPay)</span>
                    </label>
                </div>
            </form>
        </NewWindow>
    )
}

export default PaymentSelect
