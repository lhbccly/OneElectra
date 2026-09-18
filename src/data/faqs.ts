export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'ac-vs-dc',
    question: 'What is the difference between an AC EV charger and a DC fast charger?',
    answer:
      'AC chargers are lower-speed units ideal for homes, offices, and residential parking — budget-friendly with longer charge times. DC fast chargers supply high power for rapid charging at stations, highways, public parking, and commercial CPO sites.',
  },
  {
    id: 'main-products',
    question: 'What are your main products?',
    answer:
      'AC and DC EV charging stations, portable EV chargers, charging sockets, cables, conversion adapters such as Type 2 to GB/T, and related accessories. Customization is available based on customer needs.',
  },
  {
    id: 'ocpp',
    question: 'Do One Electra EV chargers support OCPP?',
    answer:
      'Yes. Our commercial AC and DC charging stations support OCPP 1.6J and OCPP 2.0.1 and are compatible with widely used charging management platforms.',
  },
  {
    id: 'certifications',
    question: 'Are your EV chargers certified for international export?',
    answer:
      'Chargers are manufactured with CE, RoHS, FCC, UKCA, and IEC documentation to support customs clearance in Pakistan, UAE, Bangladesh, Malaysia, and other markets.',
  },
  {
    id: 'markets',
    question: 'What are your main export markets?',
    answer:
      'Europe, Southeast Asia, the Middle East, and North & South America. We welcome new partners worldwide.',
  },
  {
    id: 'moq',
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'We accept sample trial orders. Volume-based distributor pricing is available for bulk purchases. Contact sales for a detailed quotation.',
  },
  {
    id: 'lead-time',
    question: 'What is your lead time?',
    answer:
      'Usual lead time is 15–25 days after deposit. Exact timing depends on quantity and product type.',
  },
  {
    id: 'shipping',
    question: 'What shipping methods do you offer?',
    answer: 'Sea, air, and express delivery — selected based on customer needs and order size.',
  },
  {
    id: 'export-terms',
    question: 'What export terms do you offer?',
    answer: 'FOB, CIF, and EXW.',
  },
  {
    id: 'payment',
    question: 'What payment methods do you support?',
    answer: 'T/T and L/C are primary methods, with additional bank and Alipay options where applicable.',
  },
  {
    id: 'quality-issue',
    question: 'What if there is a problem with received goods?',
    answer:
      'Contact us within 20 days of receiving the shipment. We provide repair, replacement, or refund based on the situation.',
  },
  {
    id: 'samples',
    question: 'Can you provide samples? What is the sample fee?',
    answer:
      'Yes. Sample fees depend on the product. For bulk orders, the sample fee can be refunded after order confirmation.',
  },
  {
    id: 'customization',
    question: 'Do you provide customization services?',
    answer:
      'Yes. OEM/ODM options include design, size, color, and packaging adjustments to match your brand requirements.',
  },
  {
    id: 'quality-control',
    question: 'How do you ensure product quality?',
    answer:
      'A strict QC process covers materials, production, inspection, and packaging. Third-party inspection can be arranged on request.',
  },
]
