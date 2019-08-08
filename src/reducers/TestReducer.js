const INITIAL_STATE = {
  testList: [
    {
      name: 'Eguono',
      age: 25,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
