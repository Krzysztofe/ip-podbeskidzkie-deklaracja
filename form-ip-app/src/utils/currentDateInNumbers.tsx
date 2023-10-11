export const currentDateInNumbers = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  // const currentDate = new Date();
  
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // const locale = "pl-PL"; // Use 'pl-PL' for Poland

  // const dateString = currentDate.toLocaleDateString(locale, options);

  return ` ${day}.${month}.${year}`;
};
