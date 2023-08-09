/* eslint-disable */
export function formatDate(inputDate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const date = new Date(inputDate);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${month} ${day}, ${hours}:${minutes.toString().padStart(2, '0')}`;

  return formattedDate;
}
