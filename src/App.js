import Card from './Components/Card'
import  './App.css'

function App() {
  return (
    <div className='box'>
      <Card src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1136386285.png?crop=1xw:1xh;center,top&resize=980:*" title="Formal Wear"/>
      <Card src="https://imgmediagumlet.lbb.in/media/2020/04/5e9830a0226fec213ee0ea87_1587032224348.jpg?fm=webp&w=750&h=500&dpr=1" title="Casual Wear" />
      <Card src="https://static.instyle.de/1080x1080/focal_1596x210:1597x211/images/2022-09/accessoires-new_york_z_str_f22_0493.jpg" title="Accessories"  />
      <Card src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600" title="Kids Wear"  />
    </div>
  );
}

export default App;
