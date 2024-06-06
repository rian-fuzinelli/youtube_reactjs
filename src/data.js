export const API_KEY = 'AIzaSyBDiahUPaRpN1XsiR6s_YlxLRUe7T6o0YA';

export const value_converter = (value) =>{
  if(value>=1000000)
    {
      return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
      return Math.floor(value/1000)+"K";
    }
    else{
      return value;
    }
}