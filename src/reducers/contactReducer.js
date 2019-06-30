import {GET_CONTACTS} from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "jdoe@gmail.com",
      phone: "555-555-555"
    },
    {
      id: 2,
      name: "Karen williams",
      email: "karen@gmail.com",
      phone: "222-222-222"
    },
    {
      id: 3,
      name: "Henry Johnson",
      email: "henry@gmail.com",
      phone: "111-111-111"
    }
  ]
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return state;
    default:
      return state;
  }
}
