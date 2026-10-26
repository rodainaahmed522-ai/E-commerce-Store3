import { useState } from "react";
import { Link } from "react-router";
import {
  Search,
  ShoppingCart,
  Package,
  CreditCard,
  User,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import "./Help.css";

const helpTopics = [
  {
    category: "Shopping",
    icon: <ShoppingCart size={24} />,
    questions: [
      {
        question: "I can't add a product to my cart.",
        answer:
          "Open the product details page and click Add to Cart. If the problem continues, refresh the page and try again.",
      },
      {
        question: "How can I remove a product from my cart?",
        answer:
          "Open your Cart page and click the Remove button under the product you want to remove.",
      },
      {
        question: "How can I change the quantity?",
        answer:
          "Open your Cart page and use the plus (+) and minus (-) buttons to change the quantity.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    icon: <Package size={24} />,
    questions: [
      {
        question: "How can I check my order?",
        answer:
          "Please contact our support team for help with your order. Order tracking may require additional functionality.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Delivery time depends on your location and the shipping service. Contact support for more information.",
      },
    ],
  },
  {
    category: "Payments",
    icon: <CreditCard size={24} />,
    questions: [
      {
        question: "What should I do if payment fails?",
        answer:
          "Check your payment information and try again. If the issue continues, contact customer support.",
      },
      {
        question: "Why can't I complete my purchase?",
        answer:
          "Make sure your cart contains the products you want and review the checkout information. Contact support if you still need help.",
      },
    ],
  },
  {
    category: "Account",
    icon: <User size={24} />,
    questions: [
      {
        question: "I have a problem using the website.",
        answer:
          "Try refreshing the page. If the problem continues, reopen the website or contact our support team.",
      },
    ],
  },
];

function Help() {
  const [search, setSearch] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const filteredTopics = helpTopics
    .map((topic) => ({
      ...topic,
      questions: topic.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase()) ||
          topic.category.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((topic) => topic.questions.length > 0);

  return (
    <main className="help-page">
      <section className="help-hero">
        <span className="help-label">NOVA STORE SUPPORT</span>

        <h1>How Can We Help You?</h1>

        <p>
          Find answers to common questions and get help with your shopping
          experience.
        </p>

        <div className="help-search">
          <Search size={22} />

          <input
            type="search"
            placeholder="Search for a problem..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenQuestion(null);
            }}
          />
        </div>
      </section>

      <section className="help-content">
        <h2>How Can We Assist You?</h2>

        <div className="help-categories">
          {filteredTopics.map((topic) => (
            <section className="help-category" key={topic.category}>
              <div className="help-category-title">
                <span className="help-category-icon">{topic.icon}</span>
                <h3>{topic.category}</h3>
              </div>

              {topic.questions.map((item) => {
                const questionId = `${topic.category}-${item.question}`;
                const isOpen = openQuestion === questionId;

                return (
                  <div className="help-question" key={item.question}>
                    <button
                      className="help-question-button"
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : questionId)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>

                      {isOpen ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>

                    {isOpen && (
                      <p className="help-answer">{item.answer}</p>
                    )}
                  </div>
                );
              })}
            </section>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="help-no-results">
            <h3>No results found</h3>
            <p>Try another search term.</p>
          </div>
        )}

        <div className="help-contact">
          <MessageCircle size={32} />

          <h2>Still Need Help?</h2>

          <p>
            Our support team is ready to help you with your questions.
          </p>

          <Link to="/contact" className="help-contact-button">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Help;