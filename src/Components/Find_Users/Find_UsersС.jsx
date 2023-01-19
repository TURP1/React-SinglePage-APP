import axios from "axios";
import React from "react";
import obj from './Find_Users.module.css';
import defaultPhoto from '../../assets/images/default_photo.jpg'

class User extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
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

        return (

            <div className={obj.findUsers_container}>
                {mapUser}
            </div>
        )
    }
}


export default User