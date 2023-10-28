import Discover from './pages/Discover';
import { Sidebar, SearchBar } from './components';



function App() {
  
  return (
    <div className="relative flex">
      <Sidebar/>

      <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar/>
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse" >
          <div className='flex-1 h-fit pb-40'>
            <Discover/>
          </div>
        </div>
        
      </div>
    </div>
  )
    

  
}
export default App;
