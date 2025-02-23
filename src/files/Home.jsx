
import { ConfettiSideCannons } from '../components/ConfettiSideCannons';
import Logorolodex from '../components/Logorolodex ';
import ShinyButton from '../components/ui/ShinyButton ';
import { WordRotateDemo } from '../components/WordRotateDemo';
import { IconCloudDemo } from '../files/IconCloudDemo';
import Safari from "../components/ui/Safari";

import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";

import Navbar from './Navbar';
import Myproject from './Myproject';
import Velocity from './Velocity';
import { FloatingNavDemo } from '../components/FloatingNavDemo';
import { SignupFormDemo } from './SignupFormDemo';






function Home(){

  const resume= ()=>{

    window.open("/filess/Sachinpatil.pdf" , "_blank");
    console.log("pdf working");
   
  }

  const linkdinprofile= ()=>{
   
    window.open("https://www.linkedin.com/in/sachin-patil30", "_blank");

  }

  const youtubeprofile=()=>{
    window.open("https://www.youtube.com/@SachinPatil-r1r",  "_blank");

  }




    return( <div>
    
    
    <div style={{backgroundColor:"black" }}>

      
      <div style={{backgroundColor:"" , height:"40px", width:"350px", borderRadius:"20px", marginLeft:"600px"}}> <Navbar /></div>
     
     <div style={{position:"relative"}}>
<IconCloudDemo style={{position:"relative" , zIndex:1}}/>

<div style={{position:"absolute" , zIndex:2 , left:"350px" , top:"250px"}}><WordRotateDemo /></div>

<div style={{position:"absolute" , zIndex:2 , left:"330px" , top:"350px", fontStyle:"inherit" , borderRadius:"10px"}}>< ConfettiSideCannons /></div>

<div style={{position:"absolute" , zIndex:2 , left:"1050px", top:"280px" , color:"white", fontWeight:"bold"}}><h2 style={{fontSize:"30px"}}>Hi , i am sachin patil</h2>
<p style={{paddingTop:"5px", paddingLeft:"20px"}}>     developer, Desingner</p>
<div style={{paddingTop:"40px"  , display:"flex" , padding:"10px"}}>< ConfettiSideCannons  />
 <div style={{paddingLeft:"20px"}} onClick={resume}> <ShinyButton >my resume</ShinyButton> </div> </div>

</div>
 </div> </div> 
    
    
    
    <div  style={{backgroundColor:"black" , position:"relative"}}>
<div style={{height:"2px" , width:"100%" , backgroundColor:"white" }}></div>
    <div className='row-3' style={{marginTop:""}}>

<div className='row-1' style={{display:"flex" , position:"absolute" , left:"350px", top:"0px" , color:"white", fontSize:"100px" , fontWeight:"bold"}}><h2>  WHO  AM I ? </h2></div>
<div style={{ position:"absolute" , left:"1100px" , top:"10px" , backgroundColor:"black" }}><Logorolodex /></div>

<div className='row-2' style={{height:"300px" , width:"400px" , border:"2px solid black" , backgroundColor:"#1a1a1a" , position:"absolute" , top:"250px", 
  left:"200px", borderRadius:"15px"
}}>

  <h2 style={{fontSize:"45px" , fontWeight:"bolder" , alignContent:"center" , }}>Hei, I'm sachin patil. I build cool websites like this one.</h2>
</div>



<div style={{height:"300px" , width:"410px", position:"relative"  , left:"650px", top:"250px" , border:"2px solid black", borderRadius:"20px" , backgroundColor:"#1a1a1a" }}>

<div className='row' style={{display:"flex" , paddingTop:"8px" , paddingLeft:"8px" , paddingRight:"8px"}}>
   <div className='col-1'  style={{border:"2px solid black" , height:"130px" , width:"195px" , backgroundColor: "lightblue", }}><img src={img14} style={{height:"130px" , width:"190px"}}  onClick={linkdinprofile}/></div>
    <div className='col-2' style={{border:"2px solid black" , height:"130px" , width:"195px", marginLeft:"12px" ,  backgroundColor: "purple", }}><img src={img13} style={{height:"130px" , width:"195px" }} onClick={youtubeprofile} /></div>
   </div>

   <div className='row' style={{display:"flex" , paddingLeft:"8px", paddingTop:"15px"  , paddingRight:"8px"}}>
   <div className='col-1'  style={{border:"2px solid black" , height:"130px" , width:"200px"  , backgroundColor: "green",}}><img src={img15} style={{height:"130px" , width:"200px" }} /></div>
    <div className='col-2' style={{border:"2px solid black" , height:"130px" , width:"200px", marginLeft:"12px" ,  backgroundColor: "lightblue", }}><img src={img14} style={{height:"130px" , width:"200px" }}   onClick={linkdinprofile}/></div>
   </div>


</div>
</div>

<div  className="row-3" style={{width:"850px" , height:"300px" , border:"2px solid black" , position:"relative" , top:"280px" , left:"200px" , borderRadius:"10px" , paddingBottom:"100px"}}>
  <h3 style={{fontSize:"40px" , paddingBottom:"100px" , backgroundColor:"#1a1a1a" }}>My passion is building cool stuff.Experienced Java Developer skilled in Spring, Spring Boot, MySQL, JavaScript, Reactjs.  Proficient in building 
scalable applications.</h3>
</div>

</div>


<div style={{marginTop:"400px",  position:"relative" }}>

 <Myproject />
 <div style={{ position:"absolute" , top:"2100px"   }}> 
    <Velocity />
  
  <div style={{position:"absolute" , top:"800px" , left:"10px" , marginLeft:"500px" , marginTop:"200px"}}><SignupFormDemo /></div>


  </div>

 

 </div>
 



    
    
    
    
    
     </div>)
}
export default Home;