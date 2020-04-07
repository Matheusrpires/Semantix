import axios from 'axios';

const url = ' https://private-afe609-testefront.apiary-mock.com';

// Esse é diferente
// time-data

export const fetchData = async () => {
  
  try {
    const { data } = await axios.get(`${url}/anual-result`);
    return data;
    
  } catch (error) {
    console.log(error);
  }
}

export const fetchDataPie = async () => {
  
  try {
    const { data } = await axios.get(`${url}/anual-percentage`);
    return data;
    
  } catch (error) {
    console.log(error);
  }
}

export const fetchDataLine = async () => {

  try {
    const { data } = await axios.get(`${url}/time-data`);
    return data;
    
  } catch (error) {
    console.log(error)
  }
}