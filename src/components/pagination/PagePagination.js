import ReactPaginate from "react-paginate";

export default function PagePagination({setPage, pageNum}) {

    let onPageChange = (e) => {
        setPage(e.selected + 1);
    }

    return (
        <div>
            <ReactPaginate
                containerClassName={'pagination'}
                pageCount={pageNum}
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                onPageChange={onPageChange}
                previousLabel={"←Previous"}
                nextLabel={"Next→"}
                activeLinkClassName={'chosen_page'}
            />
        </div>
    );
}