import obj from './Paginator.module.css';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.usersInOnePage)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={obj.findUsers_pageNumber}>
        {pages.map((page) => {
            return <span
                onClick={(e) => { props.onPageChanged(page) }}
                className={page === props.userPage ? obj.checkedPage : undefined}>{page}</span>
        })}

    </div>
}
export default Paginator