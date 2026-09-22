import { useState, useEffect, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, MessageSquare, Send, ShieldCheck, Truck, Award } from 'lucide-react'
import { useQuote } from '@/context/QuoteContext'
import { site } from '@/data/site'

const quoteEndpoint =
  import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/${site.contact.supportEmail}`

export function QuoteModal() {
  const { isOpen, quoteDetails, closeQuoteModal } = useQuote()

  const [productCategory, setProductCategory] = useState('')
  const [standard, setStandard] = useState('Type 2 (IEC 62196)')
  const [powerOutput, setPowerOutput] = useState('7kW')
  const [quantity, setQuantity] = useState('10-50 units')
  const [country, setCountry] = useState('')
  const [businessType, setBusinessType] = useState('Distributor / Importer')
  const [needOem, setNeedOem] = useState(false)

  const [companyName, setCompanyName] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
    if (quoteDetails) {
      if (quoteDetails.productModel) {
        setProductCategory(`${quoteDetails.productModel} — ${quoteDetails.productName || ''}`)
      } else if (quoteDetails.category) {
        setProductCategory(quoteDetails.category)
      }
      if (quoteDetails.standard) {
        setStandard(quoteDetails.standard)
      }
      if (quoteDetails.powerOutput) {
        setPowerOutput(quoteDetails.powerOutput)
      }
    } else {
      setProductCategory('AC Charging Wallboxes (7-22kW)')
    }
  }, [quoteDetails, isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  function getFormattedWhatsAppText() {
    const lines = [
      `*B2B Quotation Request — One Electra*`,
      `---------------------------------`,
      `*Product / Model:* ${productCategory || 'General Inquiry'}`,
      `*Connector Standard:* ${standard}`,
      `*Power Output:* ${powerOutput}`,
      `*Target Quantity:* ${quantity}`,
      `*Destination Country:* ${country || 'Not specified'}`,
      `*Business Type:* ${businessType}`,
      `*OEM/ODM Required:* ${needOem ? 'Yes (Custom Branding)' : 'No'}`,
      `---------------------------------`,
      `*Company:* ${companyName || 'Not specified'}`,
      `*Contact Person:* ${fullName || 'Not specified'}`,
      `*Email:* ${email || 'Not specified'}`,
      `*Phone/WhatsApp:* ${phone || 'Not specified'}`,
      notes ? `*Project Notes:* ${notes}` : '',
    ].filter(Boolean)

    return encodeURIComponent(lines.join('\n'))
  }

  function saveDurableQuoteEnquiry(channel: 'whatsapp' | 'rfq_form') {
    try {
      const enquiry = {
        id: `rfq_${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'rfq_quote',
        channel,
        data: {
          productCategory,
          standard,
          powerOutput,
          quantity,
          country,
          businessType,
          needOem,
          companyName,
          fullName,
          email,
          phone,
          notes,
        },
        status: channel === 'whatsapp' ? 'whatsapp_sent' : 'queued',
      }
      const existing = JSON.parse(localStorage.getItem('one_electra_enquiries') || '[]')
      existing.unshift(enquiry)
      localStorage.setItem('one_electra_enquiries', JSON.stringify(existing))
    } catch (e) {
      console.warn('Durable enquiry store fallback:', e)
    }
  }

  function handleWhatsAppRedirect() {
    saveDurableQuoteEnquiry('whatsapp')
    const text = getFormattedWhatsAppText()
    const url = `https://wa.me/${site.contact.whatsappNumber}?text=${text}`
    window.open(url, '_blank')
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    saveDurableQuoteEnquiry('rfq_form')
    setStatus('submitting')
    e.currentTarget.submit()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuoteModal}
          className="fixed inset-0 bg-ink/85 backdrop-blur-md"
          aria-hidden
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-line bg-graphite shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-line bg-panel/60 px-6 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <span className="flex size-3 rounded-full bg-lime animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                B2B Sourcing Inquiry
              </span>
            </div>
            <button
              onClick={closeQuoteModal}
              className="flex size-9 items-center justify-center rounded-full border border-line text-muted transition hover:border-lime/40 hover:text-off-white"
              aria-label="Close quote modal"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">
            {status === 'success' ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-lime/10 text-lime">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-off-white">
                  Quotation Request Submitted!
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
                  Thank you! Your inquiry has been logged for our export sales team at{' '}
                  <span className="text-lime">{site.contact.supportEmail}</span>. Typical response time is within 24 hours.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-6 py-3 text-sm font-semibold text-lime transition hover:bg-lime/20"
                  >
                    <MessageSquare className="size-4" />
                    Speed Up via WhatsApp Sales
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      closeQuoteModal()
                    }}
                    className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm text-off-white transition hover:bg-white/5"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-off-white md:text-3xl">
                    Request a Custom B2B Quotation
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Direct factory sourcing from <strong className="text-off-white">Shenyang Yibu Trading Company</strong>. Tell us your market specifications, connector standard, and required volume.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-line bg-panel/40 p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-muted">
                    <ShieldCheck className="size-3.5 text-lime" /> Vetted Tier-1 QA
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-muted">
                    <Award className="size-3.5 text-lime" /> CE / RoHS / UKCA
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-muted">
                    <Truck className="size-3.5 text-lime" /> DDP / FOB Freight
                  </div>
                </div>

                <form
                  action={quoteEndpoint}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-6"
                >
                  <input type="hidden" name="_subject" value={`New B2B Quotation | ${site.brand.name}`} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_replyto" value={email} />
                  {/* Step 1: Equipment Specs */}
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                      1. Product & Technical Requirements
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs text-muted mb-1.5">Product / Category</label>
                        <input
                          type="text"
                          name="productCategory"
                          value={productCategory}
                          onChange={(e) => setProductCategory(e.target.value)}
                          placeholder="e.g. 22kW AC Wallbox DL-EU004-6"
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Charging Standard</label>
                        <select
                          name="standard"
                          value={standard}
                          onChange={(e) => setStandard(e.target.value)}
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                        >
                          <option value="Type 2 (IEC 62196)">Type 2 (IEC 62196 - Europe / Global)</option>
                          <option value="Type 1 (SAE J1772)">Type 1 (SAE J1772 - N. America / Japan)</option>
                          <option value="GB/T (National Standard)">GB/T (China Standard)</option>
                          <option value="NACS (Tesla SAE J3400)">NACS (Tesla Standard)</option>
                          <option value="Multi-Standard / Adapters">Multi-Standard / Adapters</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Power Rating (kW)</label>
                        <select
                          name="powerOutput"
                          value={powerOutput}
                          onChange={(e) => setPowerOutput(e.target.value)}
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                        >
                          <option value="3.5kW Single-Phase">3.5 kW Single-Phase</option>
                          <option value="7kW Single-Phase">7 kW Single-Phase (32A)</option>
                          <option value="11kW Three-Phase">11 kW Three-Phase (16A)</option>
                          <option value="22kW Three-Phase">22 kW Three-Phase (32A)</option>
                          <option value="20kW-60kW DC Fast">20kW - 60kW Commercial DC Fast</option>
                          <option value="120kW-360kW DC Ultra-Fast">120kW - 360kW Highway DC Fast</option>
                          <option value="Portable / Adapters">Portable Charger / Adapter Kit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Target Order Quantity</label>
                        <select
                          name="quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                        >
                          <option value="1-10 units (Sample Batch)">1–10 units (Sample / Trial Batch)</option>
                          <option value="10-50 units">10–50 units</option>
                          <option value="50-200 units">50–200 units</option>
                          <option value="500+ units (Bulk Deployment)">500+ units (Bulk Container Order)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Customer & Shipping Details */}
                  <div className="space-y-4 pt-2 border-t border-line">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                      2. Destination & Business Details
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs text-muted mb-1.5">Destination Country & City</label>
                        <input
                          type="text"
                          name="country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g. Dubai, UAE / Germany / Pakistan"
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Business Role</label>
                        <select
                          name="businessType"
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                        >
                          <option value="Distributor / Importer">Distributor / Importer</option>
                          <option value="Fleet Operator / Logistics">Fleet Operator / Logistics</option>
                          <option value="CPO (Charge Point Operator)">CPO (Charge Point Operator)</option>
                          <option value="Commercial Installer / Contractor">Commercial Installer / Contractor</option>
                          <option value="OEM / White-Label Brand">OEM / White-Label Brand</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Your company name"
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted mb-1.5">WhatsApp / Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 ... / +49 ..."
                          className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="oemCheck"
                        name="needOem"
                        value="Yes"
                        checked={needOem}
                        onChange={(e) => setNeedOem(e.target.checked)}
                        className="size-4 rounded border-line bg-ink text-lime focus:ring-lime"
                      />
                      <label htmlFor="oemCheck" className="text-xs text-off-white cursor-pointer">
                        We require OEM / ODM custom branding (custom enclosure logo, packaging, or OCPP firmware)
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs text-muted mb-1.5">Project Notes / Specifics</label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Specify grid voltage, mounting type, OCPP platform integration, or certificate requirements..."
                        className="w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm text-off-white focus:border-lime focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-line sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime/40 bg-lime/10 px-5 py-3 text-sm font-semibold text-lime transition hover:bg-lime/20"
                    >
                      <MessageSquare className="size-4" />
                      Instant WhatsApp Quote
                    </button>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:bg-soft-green disabled:opacity-50"
                    >
                      <Send className="size-4" />
                      {status === 'submitting' ? 'Submitting RFQ...' : 'Submit Formal RFQ'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
