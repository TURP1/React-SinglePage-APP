import React from 'react'
import obj from './Profile__Info.module.css'

const ProfileInfo = (props) => {

  const ContentBackground = props.contentBackgroundsData.map(
    (background)=>{
      return(
        <img className={obj.content__background} alt="2" src={background.src} />
      )
    }
  )

  return (
    <div>
      <div>
        { ContentBackground }
      </div>
      <div className={obj.content_avatarAndDescr}>Ava + descr</div>
    </div>
  );
};
export default ProfileInfo;