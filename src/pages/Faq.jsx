import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What are the shipping and delivery times?",
      answer:
        "Shipping times vary depending on location, but we aim to deliver within 5-7 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. The item must be in its original condition.",
    },
    {
      question: "How can I track my order?",
      answer:
        "After your order is shipped, you'll receive a tracking number via email. You can use it to track your order on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay for your convenience.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption to protect your payment details.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-4 px-4 focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-700">
                {faq.question}
              </span>
              <span className="text-xl text-gray-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
