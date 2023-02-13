import React from 'react';
// import { usePagination } from './usePagination';
// import './pagination.css';
const Pagination = props => {

  const pageSize = 10;
  const itemsCount = props?.tableData?.length;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  console.log(itemsCount, pagesCount);

  const handlePreviousButtonClick=()=>{
    props.setCurrentPageNumber(props?.currentPageNumber -1 )
  }
  const handleNextButtonClick=()=>{
    props.setCurrentPageNumber(props?.currentPageNumber +1 )
  }

  return <ul style={{display : "flex", flexDirection : "row", gap : "12px", listStyleType : "none"}}><li onClick={props?.currentPageNumber === 1 ? ()=>{} :()=>handlePreviousButtonClick()}>Previous</li><li style={{color :"#282c34"}}>{props?.currentPageNumber}</li><li style={{listStyleType :"none"}} onClick={props?.currentPageNumber === pagesCount ? ()=>{} :()=>handleNextButtonClick()}>Next</li></ul>

};

export default Pagination;

//              <Pagination tableData={table} currentPageNumber={currentPageNumber} setCurrentPageNumber={(pageNumber) => setCurrentPageNumber(pageNumber)}/>