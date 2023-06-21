import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }){
    let pageNumber = [];

    for(var i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i);
    }
    
    return(
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}