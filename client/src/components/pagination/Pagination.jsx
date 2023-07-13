import style from "./Pagination.module.css"

export default function Pagination (props) {
  const { itemsPerPage, totalItems, currentPage, paginate } = props
  const pageNumbers = [];

  // Calcular el número total de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Crear un array con los números de página
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return ( 
    <nav className={style.nav}>
      <ul className={`${style.pagination} ${style.pagContainer}`}>
        {pageNumbers.map((number) => (
          <dl key={number} className={number === currentPage ? style.active : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </dl>
        ))}
      </ul>
    </nav>
  );
};