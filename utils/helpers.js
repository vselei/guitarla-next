export const dateFormatter = date => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};
