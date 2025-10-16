import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a credit score and why is it important?",
      answer: "A credit score is a numerical representation of your creditworthiness based on your financial history, farming data, and verification status. It helps lenders assess the risk of lending to you and determines your loan eligibility and interest rates."
    },
    {
      question: "How is my credit score calculated?",
      answer: "Your credit score is calculated using multiple factors including: your BVN and NIN verification status, farm mapping data, loan repayment history, farming performance metrics, cooperative membership, and financial transaction patterns. Our AI-powered system analyzes these factors to generate your score."
    },
    {
      question: "How long does verification take?",
      answer: "BVN verification is typically instant. NIN verification takes 1-2 business days. Farm mapping verification can take 3-5 business days as it requires validation from the National Crop Registry and may include field verification."
    },
    {
      question: "What documents do I need to get started?",
      answer: "You need: Valid Nigerian phone number, Bank Verification Number (BVN), National Identification Number (NIN), Farm mapping ID from registered land, and proof of farm ownership or lease agreement."
    },
    {
      question: "How much does the service cost?",
      answer: "Credit score generation is free for farmers. Lenders pay a subscription fee to access the platform: Basic plan at ₦50,000/month (up to 100 credit checks), Professional plan at ₦150,000/month (up to 500 credit checks), Enterprise plan with custom pricing for unlimited access."
    },
    {
      question: "Can I improve my credit score?",
      answer: "Yes! You can improve your score by: completing all verification steps, maintaining good loan repayment history, updating farming data regularly, increasing farm productivity, joining a registered cooperative, and maintaining consistent financial activity."
    },
    {
      question: "How secure is my data?",
      answer: "We use bank-level encryption and comply with Nigerian Data Protection Regulation (NDPR). Your data is stored securely and only shared with authorized lenders with your consent. All verification is done through official government APIs."
    },
    {
      question: "What if I don't have a farm mapping ID?",
      answer: "You can register your farm with the National Crop Registry to obtain a farm mapping ID. We provide guidance on this process, or you can work with your local agricultural extension office."
    },
    {
      question: "Do cooperatives get special benefits?",
      answer: "Yes! Registered cooperatives can: guarantee loans for members, access group lending rates, manage member credit profiles, receive bulk verification discounts, and access cooperative-specific analytics."
    },
    {
      question: "How do lenders use my credit score?",
      answer: "Lenders use your score to: determine loan eligibility, set interest rates, decide loan amounts, assess risk levels, and speed up approval processes. A higher score typically means better loan terms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-green-800">FarmCredit</span>
            </Link>
            <div className="flex gap-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about FarmCredit
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-green-800 hover:text-green-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help you get started
            </p>
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
