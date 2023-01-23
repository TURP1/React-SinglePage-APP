import React from "react";
import { NavLink, Route } from "react-router-dom";
import defaultPhoto from '../../assets/images/default_photo.jpg';
import obj from './Find_Users.module.css';


const Users = (props) => {
    let usersStore = props.users;
    let mapUser = usersStore.map((u) => {
        return (
            <div className={obj.findUsers_block} key={u.id}>
                <div className={obj.findUsers_ava_follow}>
                    <NavLink to={`/profile/${u.id}`} >
                        <img onClick={()=>{props.setCurrentProfile(u.id)}} className={obj.findUsers_ava}
                            src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="" />
                    </NavLink>
                    <div className={obj.findUsers_followed_btn}>
                        {u.followed
                            ? <button onClick={() => { props.userUnFollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.userFollow(u.id) }} >Follow</button>} </div>
                </div>
                <div className={obj.findUsers_info_container}>
                    <div className={obj.findUsers_info_fullname_status}>
                        <span className={obj.findUsers_info_fullname}>
                            {u.name + " "}{u.secondName !== undefined ? u.secondName : ``}
                        </span>
                        <div className={obj.findUsers_info_status}>{u.status !== null ? u.status : `No status`}
                        </div>
                    </div>
                    <div className={obj.findUsers_info_location}>
                        <div>
                            {`u.location.country`}</div>
                        <div>{`u.location.city`}</div>
                    </div>
                </div>
            </div>

        )
    })

    let pagesCount = Math.ceil(props.usersTotalCount / props.usersInOnePage)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div className={obj.findUsers_container}>
            <div className={obj.findUsers_pageNumber}>
                {pages.map((page) => {
                    return <span
                        onClick={(e) => { props.onPageChanged(page) }}
                        className={page === props.userPage ? obj.checkedPage : undefined}>{page}</span>
                })}

            </div>
            {mapUser}
        </div>
    )
}
export default Users