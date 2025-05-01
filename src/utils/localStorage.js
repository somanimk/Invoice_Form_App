// src/utils/localstorage.js

export const setUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  export const getUser = () => {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  };
  
  export const removeUser = () => {
    localStorage.removeItem('user');
  };
  
  export const setInvoiceData = (invoiceData) => {
    localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
  };
  
  export const getInvoiceData = () => {
    const data = localStorage.getItem('invoiceData');
    return data ? JSON.parse(data) : {};
  };
  
  export const clearInvoiceData = () => {
    localStorage.removeItem('invoiceData');
  };
  