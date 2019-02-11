export const UPDATE_DATA = '@sort/UPDATE_DATA';

export const updateSortData = (data) => {
  // console.info(data);
  return {
    type: UPDATE_DATA,
    payload: data,
  }
};
