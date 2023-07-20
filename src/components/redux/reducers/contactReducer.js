const initialState = [
  {
    id: 1,
    name: "Test ",
    number: 9876543210,
    email: "test@test.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "UPDATE_CONTACT":
      const filteredContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
