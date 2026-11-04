// All donation payment details live here. Update this one file and the
// donate page picks up the change. Leave a value as '' to show
// "coming soon" on the site instead of a blank.

// PayPal Business account that receives donations (Girl Pride Africa Kenya,
// login info@gpakgirls.org). The Merchant ID is used in links because it
// keeps working even if the account email changes.
export const PAYPAL_MERCHANT_ID = 'WCV3ZVHRPNX6Q'
export const PAYPAL_ACCOUNT_NAME = 'Girl Pride Africa Kenya'

// Builds a PayPal Donate checkout link. Donors pay by PayPal or by card
// (no PayPal account needed), and can tick "make this monthly".
export function paypalDonateUrl(amount?: number) {
  const params = new URLSearchParams({
    business: PAYPAL_MERCHANT_ID,
    currency_code: 'USD',
    item_name: 'Donation to GPAK Girls',
    no_recurring: '0',
  })
  if (amount) params.set('amount', String(amount))
  return `https://www.paypal.com/donate/?${params.toString()}`
}

// M-Pesa
export const MPESA_SEND_MONEY_NUMBER = '0725 737 867'
export const MPESA_TILL_NUMBER = '' // Buy Goods till, e.g. '123456'

// Bank transfer
export const BANK_DETAILS = {
  bankName: '',
  accountName: '',
  accountNumber: '',
  branch: '',
  swiftCode: '',
}
