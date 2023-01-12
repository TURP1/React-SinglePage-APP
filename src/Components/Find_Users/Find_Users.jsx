import React from "react";
import obj from './Find_Users.module.css'

const Find_Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: "1", firstName: "Dave", secondName: "Hortin", status: "Frontend",
                location: { country: "Ukraine", city: "Kyiv" }, followed: false, photoUrl: "https://media.pitchfork.com/photos/616f099cd0d093360a29cb3f/2:3/w_1066,h_1599,c_limit/Dave.jpg"
            },
            {
                id: "2", firstName: "Kirill", secondName: "Legasy", status: "BackEnd",
                location: { country: "Ukraine", city: "Poltava" }, followed: false, photoUrl: "https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg"
            },
            {
                id: "3", firstName: "Lidi", secondName: "Houston", status: "UI",
                location: { country: "Germany", city: "Berlin" }, followed: true, photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            },
            {
                id: "4", firstName: "Hoko", secondName: "Marrocco", status: "Frontend",
                location: { country: "Italy", city: "Rome" }, followed: true, photoUrl: "https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"
            }
        ]);
    }

    let usersStore = props.users;
    let mapUser = usersStore.map((u) => {
        return (
            <div className={obj.findUsers_block} key={u.id}>
                <div className={obj.findUsers_ava_follow}>
                    <div>
                        <img className={obj.findUsers_ava} src={u.photoUrl} alt="" /></div>
                    <div className={obj.findUsers_followed_btn}>
                        {u.followed
                            ? <button onClick={() => { props.userUnFollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.userFollow(u.id) }} >Follow</button>} </div>
                </div>
                <div className={obj.findUsers_info_container}>
                    <div className={obj.findUsers_info_fullname_status}>
                        <span className={obj.findUsers_info_fullname}>{u.firstName + " " + u.secondName}</span>
                        <div className={obj.findUsers_info_status}>{u.status}</div>
                    </div>
                    <div className={obj.findUsers_info_location}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
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

export default Find_Users