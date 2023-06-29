import image from '../images/background.png';

export const styles = {
  mainBox: {
    height: '120vh',
    backgroundImage: `url(${image})`,
    backgroundColor:'#0B1952',
    backgroundSize:'cover',
    overflow: 'hidden'
  },
  childBox:{
    paddingTop:'2px',
    display:'flex',
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap'
  },
  congrats:{
    width:'1000px'
  },
  firstprize:{
    position: 'relative',
    top: '-40px',
    fontFamily: 'Aspire SC Black Oblique',
    fontSize: '54px',
    color: 'white',
    textShadow: '0 0 25px #219ebc',
  },
  Numberbox:{
    display:'flex',
    flexDirection:'row',
    columnGap:'10px',
    paddingTop:'5px'
  },
  Number:{
    textAlign:'center',
    fontFamily: 'Aspire SC Black Oblique',
    fontSize: '64px',
    fontWeight:'bolder',
    border: '2px solid #5a189a',
    boxShadow: '0 0  6px #5a189a',
    padding:'20px 30px',
    borderRadius:'5px',
    backgroundImage:   'linear-gradient(to bottom, white, white, white, white,white,#48cae4, #03045e,#48cae4, #00b4d8, white)',
    textShadow: '0 0 400px #219ebc',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    position: 'relative',
  },
  Numbertwo:{
    textAlign:'center',
    fontFamily: 'Aspire SC Black Oblique',
    fontSize: '64px',
    border: '2px solid #5a189a',
    boxShadow: '0 0  6px #5a189a',
    padding:'30px 15px',
    borderRadius:'5px',
    backgroundImage:   'linear-gradient(to bottom, white, white, white, white,white,#48cae4, #03045e,#48cae4, #00b4d8, white)',
    textShadow: '0 0 300px #219ebc',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    position: 'relative',
    lineHeight: '90px',
  },
  lightbox:{
    display:'flex',
    flexDirection:'row',
    position:'relative',
    top:'-160px',
    columnGap:'5px'
  },
  lightimage:{
    width:'105px',
    opacity: 1,
  },
  flashlight:{
    display:'flex',
    justifyContent:'center',
    width:'700px'
  },
  flashlightbox:{
    position:'relative',
    top:'-400px',
    right:'20px'
  },
  base:{
    width:'1350px'
  },
  basebox:{
    position:'relative',
    top:'-400px'
  },
  button:{
    position:'absolute',
    width:'350px',
    left:'500px',
    top:'100px',
  },
  buttonmate:{ // Add transition for smooth effect
    '&:active': {
      transform: 'scale(0.3)', // Add scale transform on button press
    },
  }

};