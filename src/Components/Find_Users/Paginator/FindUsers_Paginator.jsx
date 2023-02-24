import { useState } from 'react';
import obj from './FindUsers_Paginator.module.css';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.usersInOnePage)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionSize = 25;
    let portionCount = Math.ceil(pagesCount / portionSize);
    const [currentPortion, setCurrentPortion] = useState(Math.ceil(props.userPage/portionSize) || 1);


    let leftPortionBorder = (currentPortion * portionSize) - (portionSize - 1);
    let rightPortionBorder = currentPortion * portionSize

    return <div className={obj.findUsers_pageNumber}>
        {currentPortion !== 1 &&
          <button onClick={() => { setCurrentPortion(currentPortion - 1) }}>
          prev
          </button>
          }
        {pages
            .filter((page) => page >= leftPortionBorder && page <= rightPortionBorder)
            .map((page) => {
                return <span
                    onClick={(e) => { props.onPageChanged(page) }}
                    className={page === props.userPage ? obj.checkedPage : undefined}>{page}</span>
            })}

        {currentPortion < portionCount &&
         <button onClick={() => { setCurrentPortion(currentPortion + 1) }}>
            next
            </button>}
    </div>
}
export default Paginator