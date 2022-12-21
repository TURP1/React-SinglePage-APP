import React from 'react'
import obj from './Profile__Info.module.css'

const ProfileInfo = () => {

  const ContentBackgroundsData = [
    {id: 1 , src: 'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg?fit=1920%2C1280&ssl=1'}
  ] ;

  const ContentBackground = ContentBackgroundsData.map(
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