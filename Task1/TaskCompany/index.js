// Define a simple React component using JSX
const initialData = [
    {name:'Onboarding call', value:{}},
    {name:'Google Search Console Access', value:{}},
    {name:'Google Analytics Access', value:{}},
    {name:'Website Access', value:{}},
    {name:'Technical Audit', value:{}},
    {name:'Anchor Text / URL Mapping', value:{}},
    {name:'Google Data Studio Report + Local Reporting Suite', value:{}},
    {name:'Site Level Optimization', value:{}},
    {name:'On Page Optimization', value:{}},
    {name:'Content Creation', value:{}},
    {name:'Content Publishing', value:{}},
    {name:'Premium Press Release', value:{}},
    {name:'Authority Niche Placements', value:{}},
    {name:'Review Management', value:{}},
    {name:'Index Links', value:{}},
    {name:'Video Recap', value:{}},
  ];
  const Hello = () => {
    const [ data, setData] = React.useState(initialData)
    
    function handleInputChange (e, name){
      const {name:inputName, value} = e.target;
      data.map(p=>{
        if(p.name === name){
          p.value[inputName] = value
        }
        return p
      })
      // setData(prev=>{
      //   [...prev].map(p=>{
      //     if(p.name === name){
      //       p.value[inputName] = value
      //     }
      //     return p
      //   })
  
        // const exist = [...prev].find(p=>p.name = name);
        // console.log(exist,"exist")
        // if(exist){
        //   exist.value[inputName] =value;
        //   return exist
        // }
      // })
    }
    // console.log(data,"dddd")
    return(
      <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}} className='table1'>
      <table>
        <tr>
    <th colspan='7'>MONTH-1</th>
        </tr>
        {data?.map((item)=>{
          return(
            <tr>
            <th>{item.name}</th>
          {  [...Array(6)].map((a,index) =>{
  return  <td><input name={item.name + index} onChange={(e)=>handleInputChange(e,item.name)}/></td>
            })}
          </tr>
          )
        })}
  </table>
  <button onClick={()=>{console.log(data)}}>Post Data</button>
        </div>
    )
  };
    
  
    // Render the component inside the root div
    ReactDOM.render(<Hello />, document.getElementById('root'));