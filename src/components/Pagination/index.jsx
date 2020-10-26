import React from 'react';
const Pagination = ({ perPage, total, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul>
                {pageNumber.map((number) => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            href="!#"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Pagination;
