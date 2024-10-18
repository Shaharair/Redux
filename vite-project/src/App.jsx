import Banner from "./Components/banner/Banner"
import Header from "./Components/header/Header"
import {useSelector} from "react-redux"

function App() {

  let ami = useSelector((state) => state.counter.value)
  

  return (
    <>
      {ami}
    <Header/>
    <Banner/>

    </>
  )
}

export default App
