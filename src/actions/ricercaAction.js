export const RICERCA = "RICERCA";
export const GET_RICERCA = "GET_RICERCA";
export const getRicercaAction = (search) => {
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_RICERCA, payload: data });
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
