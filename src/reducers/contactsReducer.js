const initialState = {
  contacts: [
    {
      name: "Joshua Mensah",
      phonenumber: "0242136305",
      address: "St luke church",
      email: "Joewy4me@yahoo.com",
      type: "Family", 
      id: "094484fdfkjskks",
    },
    {
      name: "Susana Mensah",
      phonenumber: "0540166333",
      address: "St luke church",
      email: "Siawsusana84@gmail.com",
      type: "Family", 
      id: "hfhfdkfd98833",
    },
    {
      name: "Agnes Siaw",
      phonenumber: "0241159301",
      address: "St luke church",
      email: "Agnessiaw@yahoo.com",
      type: "Friend", 
      id: "nhff877370",
    },
        
  ]
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
          console.log(action.payload)
            return {...state, contacts: [...state.contacts, action.payload]};
        case "DELETE_CONTACT":
          let undeletedContacts = state.contacts.filter(contact => contact.id !== action.payload);
            return {...state, contacts: undeletedContacts}
        case "EDIT_CONTACT":
          return{...state,contacts:state.contacts.map
            (contact => contact.id === action.payload.id ? action.payload: contact),}
            
        default:
            return state;
    }
};
export default contactsReducer;