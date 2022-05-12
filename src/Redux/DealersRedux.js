import { createSlice } from '@reduxjs/toolkit'
import {app} from '../FirebaseData/firebaseFunctions';
import { getDatabase, ref, child, onValue, update, push } from "firebase/database";

export const DealerRedux = createSlice({
  name: 'DEALERS',
  initialState: {
    dealers: undefined
  },
  reducers: {
    getDealers: (state, action) => {
        let data = action.payload.dealers;
        return {
            dealers: data
        };
    },

    setAppointment: (state, action) => {
        let data = action.payload.dealers;
        return {
            dealers: data
        };
    },
  },
})

export const dispatchDealer = () => async (dispatch) =>{
    const dbRef = ref(getDatabase(app));
    onValue(child(dbRef, `users/`), async (snapshot) => {
        let data = snapshot.val();
        dispatch(await getDealers({dealers: data}));
    });
}

export const dispatchAppointment = (userId, dia) => async (dispatch) =>{
    const db = getDatabase(app);

  // Get a key for a new Post.
  const newdayKey = push(child(ref(db), 'dias')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/users/' + userId + '/agenda/dias/' + newdayKey] = dia;

  return update(ref(db), updates);
    // const dbRef = ref(getDatabase(app));
    // let data = [];
    // onValue(child(dbRef, 'users/' + userId + '/agenda/dias'), async (snapshot) => {
    //      data = snapshot.val();
    // });
    // data.push(dia)
    // console.log(data);
    // update(dbRef, 'users/' + userId + '/agenda/',{
    //     dias: data,
    // });

    // set(ref(db, 'users/' + userId), {
    //     username: name,
    //     email: email,
    //     profile_picture : imageUrl
    // });
}

// Action creators are generated for each case reducer function
export const {getDealers, setAppointment} = DealerRedux.actions

export default DealerRedux.reducer