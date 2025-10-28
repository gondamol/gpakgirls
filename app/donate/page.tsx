'use client'

import { useState } from 'react'
import { Heart, Shield, CheckCircle, CreditCard, Smartphone } from 'lucide-react'

const impactLevels = [
  {
    amount: 25,
    currency: 'USD',
    title: 'Basic Support',
    impact: 'Provides school supplies for 2 girls for one term',
  },
  {
    amount: 50,
    currency: 'USD',
    title: 'Educational Boost',
    impact: 'Covers school fees for one girl for one month',
  },
  {
    amount: 100,
    currency: 'USD',
    title: 'Skills Training',
    impact: 'Provides tailoring training materials for one girl',
  },
  {
    amount: 250,
    currency: 'USD',
    title: 'Full Program Support',
    impact: 'Supports one teen mother through complete 6-month vocational program',
  },
]

const paymentMethods = [
  {
    name: 'Credit/Debit Card',
    icon: CreditCard,
    provider: 'Stripe',
    description: 'Secure international payments',
    available: false,
  },
  {
    name: 'M-Pesa',
    icon: Smartphone,
    provider: 'Safaricom',
    description: 'For Kenyan donors',
    available: false,
  },
  {
    name: 'PayPal',
    icon: CreditCard,
    provider: 'PayPal',
    description: 'Easy online payments',
    available: false,
  },
]

export default function DonatePage() {
  const [amount, setAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [isRecurring, setIsRecurring] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    if (e.target.value) {
      setAmount(parseFloat(e.target.value) || 0)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-primary-100">
              Your donation directly supports teen mothers in Kenya, helping them access education, training, and a brighter future.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Registered NGO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>100% Transparent</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Impact</h2>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Amount (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {impactLevels.map((level) => (
                        <button
                          key={level.amount}
                          onClick={() => handleAmountSelect(level.amount)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            amount === level.amount && !customAmount
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <div className="text-2xl font-bold text-gray-900">${level.amount}</div>
                          <div className="text-xs text-gray-600 mt-1">{level.title}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-6">
                    <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                      <input
                        type="number"
                        id="customAmount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
                      />
                    </div>
                  </div>

                  {/* Recurring Donation */}
                  <div className="mb-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                        className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-gray-700">
                        Make this a <strong>monthly donation</strong>
                        <span className="text-sm text-gray-500 block">
                          Sustain our programs with ongoing support
                        </span>
                      </span>
                    </label>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.name}
                          onClick={() => setSelectedMethod(method.name)}
                          disabled={!method.available}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            selectedMethod === method.name
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-300'
                          } ${!method.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <method.icon className="h-6 w-6 text-gray-600" />
                              <div>
                                <div className="font-semibold text-gray-900">{method.name}</div>
                                <div className="text-sm text-gray-600">{method.description}</div>
                              </div>
                            </div>
                            {!method.available && (
                              <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Donate Button */}
                  <button
                    disabled
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Payment Integration Coming Soon
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Secure checkout powered by Stripe, PayPal, and M-Pesa
                  </p>
                </div>
              </div>

              {/* Impact Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6 border-2 border-secondary-200 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-secondary-700 mb-2">
                      ${customAmount || amount}
                    </div>
                    <p className="text-gray-700">
                      {impactLevels.find(l => l.amount === amount)?.impact || 'Will make a real difference'}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">How We Use Your Donation:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Programs</span>
                        <span className="font-semibold">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-700">Operations</span>
                        <span className="font-semibold">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-700">Fundraising</span>
                        <span className="font-semibold">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-secondary-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 border-t border-secondary-200 pt-4">
                    <p className="mb-2">✓ Tax-deductible donation receipt provided</p>
                    <p className="mb-2">✓ 100% secure encrypted transaction</p>
                    <p>✓ Cancel recurring donations anytime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stories */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                See How Donations Make a Difference
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {['School fees helped Grace return to Form 4', 'Tailoring kit enabled Faith to start her business', 'Counseling sessions gave Joy hope for the future'].map((story, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="h-40 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4"></div>
                    <p className="text-gray-700 font-medium">{story}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Ways to Give */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other Ways to Give
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Bank Transfer</h3>
              <p className="text-gray-600 text-sm mb-4">
                For large donations, contact us for bank transfer details.
              </p>
              <a href="/contact" className="text-primary-600 font-medium hover:underline">
                Get Details →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Corporate Sponsorship</h3>
              <p className="text-gray-600 text-sm mb-4">
                Partner with us through corporate social responsibility programs.
              </p>
              <a href="/contact" className="text-primary-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">In-Kind Donations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Donate materials, equipment, or services directly to our programs.
              </p>
              <a href="/contact" className="text-primary-600 font-medium hover:underline">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

