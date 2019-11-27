const vieEngSentenceSelectingExercise = {
  id: "0",
  type: "vieEngSentenceSelecting",
  requirement: "Chọn nghĩa đúng",
  question: "Tôi là con bò",
  choices: [ "I am a mouse.", "I am a cow.", "I am a journalist." ],
  answers: [ "I am a cow." ]
}

const vieEngSentenceMakingExercise = {
  id: "1",
  type: "vieEngSentenceMaking",
  requirement: "Viết bằng tiếng Anh",
  question: "Tôi ăn con cua.",
  wordsToPick: [ "the", "bear", "I", "animal", "eat", "crab", "mouse", "the", "spider",  ],
  answers: [ "I eat the crab" ]
}

const engVieSentenceTranslatingExercise = {
  id: "2",
  type: "engVieSentenceTranslating",
  requirement: "Viết bằng tiếng Việt",
  question: "Girl",
  answers: [ "Cô gái.", "Con gái.", "Cô bé.", "Bé gái." ]
}

const vieEngListeningAndSentenceMakingExercise = {

}

const vieEngPictureSelectingExercise = {
  id: "3",
  type: "vieEngPictureSelecting",
  requirement: "Đâu là \"đàn ông\"?",
  imagesToPick: [
    { index: 1, word: "boy", imgUrl: "exercise-images/boy.png" },
    { index: 2, word: "man", imgUrl: "exercise-images/man.png" },
    { index: 3, word: "cat", imgUrl: "exercise-images/cat.png" }
  ],
  answers: [ "man" ]
}

const vieEngPictureSelectingExercise2 = {
  id: "4",
  type: "vieEngPictureSelecting",
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
  vieEngPictureSelectingExercise2,
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