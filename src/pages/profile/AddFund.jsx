import back from "../../assets/icon/back.png"
import deposit from "../../assets/deposit.png"
import profile3 from "../../assets/pro.jpg"
import { useNavigate } from "react-router-dom"


const AddFund = () => {
    const navigate = useNavigate()
  return (
    <div className="container mx-auto pt-28 pb-12">
        <div className="flex justify-between">
           <div className="flex items-start">
                <img src={back} className="mr-4 cursor-pointer" onClick={()=>navigate(-1)}/>
                <img src={deposit}/>
           </div>
           <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-nav-shadow shadow-[#CB087D]">
                    <img src={profile3} alt="Profile Image"/>
                </div>
                <div className="ml-10">
                    <p className="font-bold text-[#CB087D] text-xl">Md Biplab Miah</p>
                    <p>Beginner</p>
                </div>
            </div>
        </div>
        <div>
            <p>Deposit Now</p>
            <p>All History</p>
            <p>0 items found</p>
            <p><span>Amount</span><span>USD $</span><span>0.00</span></p>
        </div>
        <div>
            <div>
                <button>All</button>
                <button>Pending</button>
                <button>Paid</button>
                <button>Rejected</button>
            </div>
            <div>
                <p>No Report Found</p>
            </div>
        </div>
    </div>
  )
}

export default AddFund