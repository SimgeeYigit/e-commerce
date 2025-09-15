import React, { useState } from 'react';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='flex justify-center items-center mb-12'>
            <div className='flex font-montserrat font-bold text-sm  w-[312px] h-[74px] border-[1.35px] rounded-[6.73px] border-[#BDBDBD]'>
                <button
                    onClick={() => handlePageChange(1)}
                    className='flex items-center justify-center w-[83px] bg-[#F3F3F3] rounded-l-[6.73px] border-r-[1.35px] border-r-[#BDBDBD]
            text-[#BDBDBD]'>First</button>
                {[1, 2, 3].map((page) => (
                    <button
                        className={`flex items-center justify-center w-[46px] border-r-[1.35px] border-r-[#BDBDBD] 
                    ${currentPage === page ? 'bg-[#23A6F0] text-white' : 'bg-white text-[#23A6F0]'}`}
                        key={page}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className='flex items-center justify-center w-[85px] text-[#23A6F0]'>Next</button>
            </div>
        </div>
    );
};

export default Pagination;