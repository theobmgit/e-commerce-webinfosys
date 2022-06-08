const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()
const ZaloPay = require('zalopay').default;

app.use(cors())

const configs = {
    app_id: '2554',
    key1: 'sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn',
    key2: 'trMrHtvjo6myautxDUiAcYsVtaeQ8nhf',
    test: true
};

const zalopay = new ZaloPay(configs);

// Get Banks
router.get('/banks', async (req, res) => {
    const banks = await zalopay.getListMerchantBanks();
    res.status(200).send(banks)
})

// Create Transaction
const items = [
    {
        itemid: '9001',
        itemname: 'Bluetooth Apple AirPods 2',
        itemprice: 3350000,
        itemquantity: 1
    }
];

const transaction = {
    /**
     * Required
     */
    app_user: 'demo',
    amount: 50000,
    items,
    bankcode: 'zalopayapp',
    description: 'ZaloPay Integration Demo',
    order_type: 'GOODS', // Loại đơn hàng:GOODS, TRANSPORTATION, HOTEL, FOOD, TELCARD, BILLING. Mặc định là GOODS.
    /**
     * Embed Data (Optional)
     */
    redirecturl: '', // Redirect về url này sau khi thanh toán trên cổng ZaloPay (override redirect url lúc đăng ký app với ZaloPay)
    columninfo: {}, // Thêm thông tin hiển thị ở phần Quản lý giao dịch chi tiết trên Merchant site, nếu cột chưa tồn tại cần vào phần Cài đặt hiển thị dữ liệu để cấu hình
    campaigncode: '', // Dùng để triển khai chương trình khuyến mãi
    zlppaymentid: '', // Mã thông tin thanh toán
    /**
     * Optional
     */
    callback_url: '', // Zalopay sẽ thông báo trạng thái thanh toán của đơn hàng khi thanh toán hoàn tất; callback_url được gọi để thông báo kết quả thanh toán thất bại hoặc thành công. Nếu không được cung cấp, callback_url mặc định của ứng dụng sẽ được sử dụng.
    product_code: '', // Loại API mà đối tác sử dụng: ESCROW, QR, DIRECT, AGREEMENT
    device_info: {}, // Chuỗi JSON mô tả thông tin của thiết bị
    title: '', // Tiêu đề đơn hàng.
    phone: '', // Số điện thoại của người dùng
    email: '', // Email của người dùng
    address: '' // Địa chỉ của người dùng
};

/*
{
  return_code: 1
  return_message: '', // Mô tả chi tiết thông tin mã lỗi
  sub_return_code: 1,
  sub_return_message: '',
  order_url: '', // Dùng để tạo QR code hoặc gọi chuyển tiếp sang trang cổng ZaloPay
  app_trans_id: '' // Dùng để truy vấn trạng thái thanh toán của đơn hàng
}
*/
router.post('/transaction', async (req, res) => {
    const transaction = req.body
    const data = await zalopay.createTransaction(transaction);
    res.status(202).send(data);
})

/* Handle callback_url
{
  'code': '',
  'message': ''
}
*/
router.post('/callback_url', (req, res) => {
    const data = zalopay.handleCallback(req.body);
    res.status(202).send(data);
});

/* Get Transaction Status
  {
      return_code: 1,
      return_message: '', // Thông tin trạng thái đơn hàng
      sub_return_code: 1,
      sub_return_message: '',
      is_processing: true,
      amount: 123, // Số tiền ứng dụng nhận được (chỉ có ý nghĩa khi thanh toán thành công)
      zp_trans_id: // Mã giao dịch của ZaloPay
  }
*/
router.get('/transaction/:id', (req, res) => {
    const {id} = req.params
    const data = zalopay.getTransactionStatus(id);
    res.json(data);
})

/* Refund
{
  return_code: 1,
  return_message: '', // Thông tin trạng thái đơn hàng
  sub_return_code: 1,
  sub_return_message: '',
  refund_id: '' // Mã giao dịch hoàn tiền của ZaloPay, cần lưu lại để đối chiếu
}
*/
router.post('/refund', (req, res) => {
    const zp_trans_id = '';
    const amount = 0;
    const description = ''; // optional
    const data = zalopay.refund(zp_trans_id, amount, description);
    res.json(data)
})

/* Get Refund Status
{
  return_code: 1,
  return_message: '', // Thông tin trạng thái đơn hàng
  sub_return_code: 1,
  sub_return_message: '',
}
*/
router.get('/refund/:id', (req, res) => {
    const {id} = req.params;
    const data = zalopay.getRefundStatus(id);
    res.json(data)
})

module.exports = router
