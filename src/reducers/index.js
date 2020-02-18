export const initialState = {
  user: {
    name: "Valentin",
    surname: "Ageev",
    age: 27
  }
};

export function rootReducer(state = initialState) {
  return state;
}
