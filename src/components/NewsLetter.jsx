import React, { useState } from "react";
import News from "../images/Hero2.jpeg";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer la soumission du formulaire, par exemple en envoyant les données à un serveur
    console.log(`Email: ${email}, Accept Terms: ${acceptTerms}`);
    // Réinitialiser le formulaire après la soumission
    setEmail("");
    setAcceptTerms(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:w-[50rem]">
        <div className="ml-10">
          <img
            src={News}
            alt="image"
            className="bg-cover bg-center h-80 md:w-full"
          />
        </div>
        <div className="bg-[#afd89d]  flex justify-center items-center text-[#13250e] md:h-[19.5rem]">
          <form onSubmit={handleSubmit} className="space-y-2 md:w-[18rem]">
            <div className="mb-10 text-center">
              <h2 className="text-[1.19rem] font-serif font-bold">
                Abonnez-vous pour l'action
              </h2>
              <p className="text-[0.75rem]">
                Plongez dans l'action environnementale : abonnez-vous à notre
                newsletter pour des conseils exclusifs chaque semaine!
              </p>
            </div>
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block  md:w-full p-2 border border-[#3d692c]"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="acceptTerms" className="text-sm text-[#13250e]">
                Accepter les conditions de la newsletter
              </label>
            </div>
            <div>
              <button
                type="submit"
                className=" md:w-full py-2 px-4 border-[#13250e] bg-[#2b4522] text-[#f6faf3] font-semibold rounded-lg"
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
