import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const initiatePayment = async (paymentData: any) => {
  const response = await axios.post(process.env.PAYMENT_URL!, {
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    tran_id: paymentData.transactionId,
    success_url: "http://localhost:5000/api/v1/payment/confirmation",
    fail_url: "http://www.merchantdomain.com/failedpage.html",
    cancel_url: "http://www.merchantdomain.com/cancelpage.html",
    amount: paymentData.totalPrice,
    currency: "BDT",
    desc: "Merchant Registration Payment",
    cus_name: paymentData.customerName,
    cus_email: paymentData.customerEmail,
    cus_add1: paymentData.customerAddress,
    cus_add2: "Mohakhali DOHS",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1206",
    cus_country: "Bangladesh",
    cus_phone: paymentData.customerPhone,
    type: "json",
  });

  return response.data;
};
