import ReactPaginate from "react-paginate";

export default function PagePagination({setPage}) {

    let onPageChange = (e) => {
        setPage(e.selected + 1);
        window.scroll(0, 0);
    }
    return (
        <div>
            <ReactPaginate
                containerClassName={'pagination'}
                pageCount={20}
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