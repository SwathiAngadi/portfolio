import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Card One", content: "This is the first card" },
  { id: 2, title: "Card Two", content: "This is the second card" },
  { id: 3, title: "Card Three", content: "This is the third card" },
];

export default function CardGrid() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`} // <-- matches modal for animation
            onClick={() => setSelectedCard(card)}
            className="bg-white shadow-md rounded-2xl p-6 cursor-pointer hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-500 mt-2 line-clamp-2">{card.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0  bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            />
            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedCard.id}`} // <-- same id for smooth expand
              className="fixed z-50 top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
              <p className="text-gray-600">{selectedCard.content}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
