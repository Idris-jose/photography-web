export default function Header(){
    return(
        <>
        <div class="flex font-display justify-between items-center ml-6 mr-6">
        
    <div class="logo font-bold font-body text-3xl">IMAGERY</div>
    <ul class="flex space-x-4  font-medium items-center ">
      <li className="border-2 rounded-full px-3 py-1  border-gray-300"><a href="#">Bio</a></li>
      <li className="border-2 rounded-full px-3 py-1 border-gray-300"><a href="#">Portfolio</a></li>
      <li className="border-2 rounded-full px-3 py-1 border-gray-300"><a href="#">Works</a></li>
      <li className="border-2 rounded-full px-3 py-1 border-gray-300"><a href="#">Reach Out</a></li>
    </ul>
  
        </div>
        </>
    )
}