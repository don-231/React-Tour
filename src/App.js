import { Loader } from "./components/loading";
import { Tours } from "./components/Tours";
import { useEffect,useState } from "react"
import axios from "axios";
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      // const res = await fetch(url)
      // const tours = await res.json()
      const res = await axios.get(url)
      const tours = res.data

      
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch(err) {
      setLoading(false)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button onClick={() => fetchTours()}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <div className="">
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </div>
  )
}

export default App