// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h3>Mobile Operating System</h3>
       <Block arrs={['Android','Blackberry','iPhone','Windows Phone']} />
    <h3>Mobile Manufacturers</h3>
    <Block arrs={['Samsung','HTC','Micromax','Apple']} />
   
    </div>
  );
}
function Block(arr){
  let {arrs}=arr;
  return(<ul>
    {arrs.map((prod)=>{
      return <List prods={prod}/>
    })}
  </ul>);
    
   
}

function List(product){
    let {prods}=product;
    return <li>{prods}</li>
}

export default App;
