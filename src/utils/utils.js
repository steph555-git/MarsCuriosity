export const getLastYearDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
  
    const year = String(yesterday.getFullYear() - 2);
    const month = String(yesterday.getMonth() + 1);
    const day = String(yesterday.getDate());
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };