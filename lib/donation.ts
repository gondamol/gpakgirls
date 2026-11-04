// All donation payment details live here. Update this one file and the
// donate page picks up the change. Leave a value as '' and that item
// stays hidden on the site.

// PayPal Business account that receives donations (Girl Pride Africa Kenya,
// login info@gpakgirls.org). The Merchant ID is used in links because it
// keeps working even if the account email changes.
export const PAYPAL_MERCHANT_ID = 'WCV3ZVHRPNX6Q'
export const PAYPAL_ACCOUNT_NAME = 'Girl Pride Africa Kenya'

const SITE = 'https://www.gpakgirls.org'

// All amounts on the site are in USD. M-Pesa donors give any amount in KES,
// and PayPal converts for donors paying in other currencies.

// Walk With Her monthly minimum, used in copy across the site.
export const MONTHLY_FROM_USD = 10
export const monthlyFrom = () => `USD ${MONTHLY_FROM_USD}`

// Builds a PayPal Donate checkout link. Donors pay by PayPal or by card
// (no PayPal account needed), and can tick "make this monthly".
export function paypalDonateUrl(amount?: number) {
  const params = new URLSearchParams({
    business: PAYPAL_MERCHANT_ID,
    currency_code: 'USD',
    item_name: 'Donation to GPAK Girls',
    no_recurring: '0',
    // After paying, PayPal sends the donor back through /api/paypal-return
    // (which accepts PayPal's POST or GET) to the thank-you page.
    // Needs Auto Return switched on in PayPal: see the comment at the end of this file.
    return: `${SITE}/api/paypal-return`,
    rm: '1',
    cancel_return: `${SITE}/donate`,
  })
  if (amount) params.set('amount', String(amount))
  return `https://www.paypal.com/donate/?${params.toString()}`
}

// M-Pesa
export const MPESA_SEND_MONEY_NUMBER = '0725 737 867'
export const MPESA_TILL_NUMBER: string = '' // Buy Goods till, e.g. '123456'

// Bank transfer
export const BANK_DETAILS = {
  bankName: '',
  accountName: '',
  accountNumber: '',
  branch: '',
  swiftCode: '',
}

// Google Ads conversion tag for the thank-you page (Ad Grants requires one).
// In Google Ads: Goals > Conversions > New conversion action > Website >
// "Donation". Copy the send_to value it gives, e.g. 'AW-123456789/AbCdEfGh',
// and paste it here. Leave '' until then; nothing loads while it is empty.
export const GOOGLE_ADS_SEND_TO: string = ''

// PayPal Auto Return (one-time setting in PayPal):
// Account Settings > Website payments > Website preferences > Update >
// Auto return: On, Return URL: https://www.gpakgirls.org/donate/thank-you
