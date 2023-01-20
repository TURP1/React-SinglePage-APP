import axios from "axios";
import React from "react";
import obj from './Find_Users.module.css';
import defaultPhoto from '../../assets/images/default_photo.jpg'

class User extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.userPage}&count=${this.props.usersInOnePage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (changedPage) => {
        this.props.setUserPage(changedPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.userPage}&count=${this.props.usersInOnePage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }




    render() {

        let usersStore = this.props.users;
        let mapUser = usersStore.map((u) => {
            return (

                <div className={obj.findUsers_block} key={u.id}>
                    <div className={obj.findUsers_ava_follow}>
                        <div>
                            <img className={obj.findUsers_ava}
                                src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="" /></div>
                        <div className={obj.findUsers_followed_btn}>
                            {u.followed
                                ? <button onClick={() => { this.props.userUnFollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.userFollow(u.id) }} >Follow</button>} </div>
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

        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.usersInOnePage)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div className={obj.findUsers_container}>
                <div className={obj.findUsers_pageNumber}>

                    {pages.map((page) => {
                        return <span
                            onClick={(e) => { this.onPageChanged(page) }}
                            className={page === this.props.userPage && obj.checkedPage}>{page}</span>
                    })}

                </div>
                {mapUser}
            </div>
        )
    }
}


export default User