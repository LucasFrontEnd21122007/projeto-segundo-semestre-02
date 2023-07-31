// Neste exemplo, o arquivo JavaScript é usado para interatividade,
// destacando a linha quando o mouse passa sobre ela.

const tableRows = document.querySelectorAll('tbody tr');

tableRows.forEach(row => {
  row.addEventListener('mouseover', () => {
    row.style.backgroundColor = '#ffc';
  });

  row.addEventListener('mouseout', () => {
    row.style.backgroundColor = '';
  });
});
