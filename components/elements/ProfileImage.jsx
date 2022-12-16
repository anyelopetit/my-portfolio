import React from "react";
import Image from "next/future/image";
import profilePic from "../../src/me.png";


let ProfileImage = (props) => {
   let styles = {
      position: 'absolute',
      right: 0,
      transform: 'translate(-2rem, -60%)',
      width: '20rem',
      
   }

   return (
     <>
       <Image
         src={profilePic}
         alt="Picture of the author"
         style={styles}
         layout={"raw"}
         className={"hidden lg:block"}
         {...props}
       />
     </>
   );
}

export default ProfileImage;