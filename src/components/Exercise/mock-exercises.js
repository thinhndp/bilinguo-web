const vieEngSentenceSelectingExercise = {
  id: "vieEngSentenceSelecting",
  requirement: "Chọn nghĩa đúng",
  question: "Tôi là con bò",
  choices: [ "I am a mouse.", "I am a cow.", "I am a journalist." ],
  answers: [ "I am a cow." ]
}

const vieEngSentenceMakingExercise = {
  id: "vieEngSentenceMaking",
  requirement: "Viết bằng tiếng Anh",
  question: "Tôi ăn con cua.",
  wordsToPick: [ "the", "bear", "I", "animal", "eat", "crab", "mouse", "the", "spider",  ],
  answers: [ "I eat the crab" ]
}

const engVieSentenceTranslatingExercise = {
  id: "engVieSentenceTranslating",
  requirement: "Viết bằng tiếng Việt",
  question: "Girl",
  answers: [ "Cô gái.", "Con gái.", "Cô bé.", "Bé gái." ]
}

const vieEngListeningAndSentenceMakingExercise = {

}

const vieEngPictureSelectingExercise = {
  id: "vieEngPictureSelecting",
  requirement: "Đâu là \"đàn ông\"?",
  imagesToPick: [
    { index: 1, word: "boy", imgUrl: "exercise-images/boy.png" },
    { index: 2, word: "man", imgUrl: "exercise-images/man.png" },
    { index: 3, word: "cat", imgUrl: "exercise-images/cat.png" }
  ],
  answers: [ "man" ]
}

export const vieEngPictureSelecting = "vieEngPictureSelecting";
export const vieEngListeningAndSentenceMaking = "vieEngListeningAndSentenceMakingExercise";
export const engVieSentenceTranslating = "engVieSentenceTranslating";
export const vieEngSentenceMaking = "vieEngSentenceMaking";
export const vieEngSentenceSelecting = "vieEngSentenceSelecting";

export const exerciseList = [
  vieEngPictureSelectingExercise,
  vieEngSentenceSelectingExercise,
  vieEngSentenceMakingExercise,
  engVieSentenceTranslatingExercise,
];

export const mockSessionResult = {
  correctCount: 2,
  timeSpent: 30,
  exerciseAnswers: [
    { exercise: vieEngPictureSelectingExercise, userAnswer: "man", isCorrect: true },
    { exercise: vieEngSentenceSelectingExercise, userAnswer: "I am a mouse.", isCorrect: false },
    { exercise: vieEngSentenceMakingExercise, userAnswer: "I eat the crab", isCorrect: true },
    { exercise: engVieSentenceTranslatingExercise, userAnswer: "Cooasdo", isCorrect: false },
    { exercise: vieEngSentenceMakingExercise, userAnswer: "I eat the crab", isCorrect: true },
    { exercise: engVieSentenceTranslatingExercise, userAnswer: "Cooasdo", isCorrect: false }
  ]
}