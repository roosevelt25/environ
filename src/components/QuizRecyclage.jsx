import { useState } from "react";

const QuizRecyclage = () => {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [questionScores, setQuestionScores] = useState(
    Array(5).fill({ score: 0, max: 4 })
  ); // Tableau pour stocker les scores de chaque question

  const correctAnswers = {
    'q1': 'b',
    'q2': 'b',
    'q3': 'b',
    'q4': 'c',
    'q5': 'b'
  };

  const handleAnswerChange = (questionId, answer) => {
    const selectedAnswer = document.querySelector(
      `input[name="q${questionId}"]:checked`
    );

    if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${questionId}`]) {
      // Met à jour le score de la question
      const updatedScores = [...questionScores];
      updatedScores[questionId - 1] = { score: 4, max: 4 }; // Bonne réponse : 4/4
      setQuestionScores(updatedScores);

      setScore(score + 4); // Ajoute 4 points pour chaque bonne réponse
    } else {
      // Met à jour le score de la question
      const updatedScores = [...questionScores];
      updatedScores[questionId - 1] = { score: 0, max: 4 }; // Mauvaise réponse : 0/4
      setQuestionScores(updatedScores);
    }
  };

  const handleResultClick = () => {
    setShowScoreModal(true); // Affiche le modal avec le score
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowScoreModal(false); // Cache les deux modals
    // Réinitialise les choix des utilisateurs
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      input.checked = false; // Décoche toutes les cases à cocher
    });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <h2 className="md:text-4xl text-2xl text-[#14260d] font-bold text-center mb-4">
        Quiz Recyclage : Deviens un champion du tri !
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-10">
        <div className="question bg-[#efee99] text-[#64481f] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Question 1: Quelle poubelle est réservée aux bouteilles en plastique ?
          </h3>
          <div className="answer">
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q1"
              value="a"
              onChange={() => handleAnswerChange(1, 'a')}
            />{' '}
            a) La poubelle verte <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q1"
              value="b"
              onChange={() => handleAnswerChange(1, 'b')}
            />{' '}
            b) La poubelle jaune <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q1"
              value="c"
              onChange={() => handleAnswerChange(1, 'c')}
            />{' '}
            c) La poubelle bleue
          </div>
        </div>

        <div className="question bg-[#efee99] text-[#64481f] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Question 2: Parmi ces objets, lequel est recyclable ?
          </h3>
          <div className="answer">
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q2"
              value="a"
              onChange={() => handleAnswerChange(2, 'a')}
            />{' '}
            a) Un chewing-gum <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q2"
              value="b"
              onChange={() => handleAnswerChange(2, 'b')}
            />{' '}
            b) Une canette en aluminium <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q2"
              value="c"
              onChange={() => handleAnswerChange(2, 'c')}
            />{' '}
            c) Un mouchoir en papier
          </div>
        </div>

        <div className="question bg-[#efee99] text-[#64481f] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Question 3: Quel déchet peut être recyclé pour fabriquer de nouveaux
            journaux ?
          </h3>
          <div className="answer">
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q3"
              value="a"
              onChange={() => handleAnswerChange(3, 'a')}
            />{' '}
            a) Une bouteille en verre <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q3"
              value="b"
              onChange={() => handleAnswerChange(3, 'b')}
            />{' '}
            b) Un vieux journal <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q3"
              value="c"
              onChange={() => handleAnswerChange(3, 'c')}
            />{' '}
            c) Une boîte de conserve
          </div>
        </div>

        <div className="question bg-[#efee99] text-[#64481f] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Question 4: Avant de jeter une bouteille en verre dans la poubelle, il
            faut :
          </h3>
          <div className="answer">
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q4"
              value="a"
              onChange={() => handleAnswerChange(4, 'a')}
            />{' '}
            a) La remplir d&apos;eau <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q4"
              value="b"
              onChange={() => handleAnswerChange(4, 'b')}
            />{' '}
            b) La casser en morceaux <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q4"
              value="c"
              onChange={() => handleAnswerChange(4, 'c')}
            />{' '}
            c) La vider et la rincer
          </div>
        </div>

        <div className="question bg-[#efee99] text-[#64481f] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Question 5: Le recyclage permet de :
          </h3>
          <div className="answer">
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q5"
              value="a"
              onChange={() => handleAnswerChange(5, 'a')}
            />{' '}
            a) Faire pousser des arbres plus vite <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q5"
              value="b"
              onChange={() => handleAnswerChange(5, 'b')}
            />{' '}
            b) Fabriquer de nouveaux objets avec des déchets <br />
            <input
              className="text-[#487f31] mr-2"
              type="radio"
              name="q5"
              value="c"
              onChange={() => handleAnswerChange(5, 'c')}
            />{' '}
            c) Nettoyer les océans
          </div>
        </div>
      </div>

      <button
        onClick={handleResultClick}
        className="bg-[#e1f0d7] hover:bg-[#314f25] text-[#64481f] font-bold border border-[#2b4423] text-xl hover:text-[#e1f0d7] mt-5 font-serif py-2 px-10 rounded focus:outline-none focus:shadow-outline"
      >
        Résultat
      </button>

      {showScoreModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Votre score :</h2>
            <p className="text-lg mb-4">{score}/20</p>
            <ul>
              {questionScores.map((questionScore, index) => (
                <li key={index}>
                  Question {index + 1}: {questionScore.score}/{questionScore.max}
                </li>
              ))}
            </ul>
            <p
              className={`text-lg mb-4 ${
                score >= 16
                  ? 'text-green-500'
                  : score >= 8
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              {score >= 16
                ? 'Bravo ! Tu es un champion du recyclage !'
                : score >= 8
                ? 'Pas mal ! Tu as bien compris les bases du recyclage.'
                : 'Pas de panique ! Continue à apprendre et à recycler.'}
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#e1f0d7] hover:bg-[#314f25] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Résultats du quiz</h2>
            <p
              className={`text-lg mb-4 ${
                score >= 16
                  ? 'text-green-500'
                  : score >= 8
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              {score >= 16
                ? 'Bravo ! Tu es un champion du recyclage !'
                : score >= 8
                ? 'Pas mal ! Tu as bien compris les bases du recyclage.'
                : 'Pas de panique ! Continue à apprendre et à recycler.'}
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#e1f0d7] hover:bg-[#314f25] text-white font-bold py-2 mx10 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizRecyclage;