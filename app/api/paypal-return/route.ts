import { NextResponse } from 'next/server'

// PayPal can return donors with either a GET or a POST. A plain page only
// answers GET, so this route accepts both and forwards to the thank-you page.
function toThankYou(request: Request) {
  return NextResponse.redirect(new URL('/donate/thank-you', request.url), 303)
}

export const GET = toThankYou
export const POST = toThankYou
