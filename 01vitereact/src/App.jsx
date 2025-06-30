
import Chai from "./chai"
function App() {
  const username = "chai aur code"
  // {username} -this  called expression ,in this we can only write evaluation expression ,this can be treated as var and  '${username}' this can be treated as string 

return(
  <>
  <Chai/>
  <h1>Chai aur React {username}</h1>
  <p>test para</p>
  </>
)
}

export default App;
