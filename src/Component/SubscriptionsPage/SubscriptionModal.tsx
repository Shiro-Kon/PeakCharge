import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SubscriptionModal = ({ isOpen, onClose }: Props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Закрытие по Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
        const response = await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          email,
          comment,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("✅ Заявку відправлено! Ми з вами зв'яжемося.");
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setComment("");
      } else {
        setErrorMessage(data.message || "Сталася помилка. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("⚠️ Помилка відправки. Перевірте з'єднання.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white/90 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Заповніть форму</h2>
          <button
            onClick={onClose}
            className="text-white/90 hover:text-red-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Ім’я</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full rounded-lg border text-white/90 placeholder:text-white/90 bg-white/20 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ваше ім’я"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Телефон</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full rounded-lg border text-white/90 placeholder:text-white/90 bg-white/20 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+380..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border text-white/90 placeholder:text-white/90 bg-white/20 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Коментар (опціонально)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-lg border text-white/90 placeholder:text-white/90 bg-white/20 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Ваші побажання..."
            ></textarea>
          </div>

          {successMessage && (
            <div className="text-green-400 text-sm">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-400 text-sm">{errorMessage}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl shadow-lg transition"
          >
            {loading ? "Відправка..." : "Відправити заявку"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionModal;
