
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer Z88EUcjVlj5QcAxJHXJ5VooJEjBV");
​
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "",
    "Timestamp": "20221114221034",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254723466711,
    "PartyB": 174379,
    "PhoneNumber": 254723466711,
    "CallBackURL": "https://https://www.nairobiclassyescorts.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));