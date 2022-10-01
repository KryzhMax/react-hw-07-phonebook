// _________________________________________________________________

// export const contactsReducer = createReducer(contactsInitState, {
//   [addContact]: (state, { payload }) => {
//     console.log(payload);
//     return [...state, payload];
//     // state.push(payload);
//   },
//   [delContact]: (state, { payload }) => {
//     return state.filter(item => item.id !== payload.id);
//     // const idx = state.findIndex(item => item.id === payload.id);
//     // state.splice(idx, 1);
//   },
// });

// export const filterReducer = createReducer(filterInitState, {
//   [filterContact]: (state, { payload }) => {
//     // console.log(payload);
//     return state.filter(item => item.name.toLowerCase().includes(payload.name));
//   },
// });
