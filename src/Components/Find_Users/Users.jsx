import React from "react";
import { NavLink } from "react-router-dom";
import defaultPhoto from '../../assets/images/default_photo.jpg';
import obj from './Find_Users.module.css';
import Paginator from "./Paginator/Paginator";


const Users = (props) => {
    let usersStore = props.users;
    let mapUser = usersStore.map((u) => {
        return (
            <div className={obj.findUsers_block} key={u.id}>
                <div className={obj.findUsers_ava_follow}>
                    <NavLink to={`/profile/${u.id}`} >
                        <img className={obj.findUsers_ava}
                            src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="1" />
                    </NavLink>
                    <div className={obj.findUsers_followed_btn}>
                        {u.followed
                            ? <button disabled={props.isFollowingFetched.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.isFollowingFetched.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }} >Follow</button>} </div>
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



    return (

        <div className={obj.findUsers_container}>
            <Paginator usersTotalCount={props.usersTotalCount} usersInOnePage={props.usersInOnePage}
             onPageChanged={props.onPageChanged} userPage={props.userPage}/>
            {mapUser}
        </div>
    )
}


export default Users