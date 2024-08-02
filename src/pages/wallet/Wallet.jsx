import { useNavigate } from "react-router-dom";
import p2p from "../../assets/icon/p2p.png";
import WallatNav from "../../components/WallatNav";

const Wallet = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container mx-auto pt-28 pb-12 px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-8/12">
                        <WallatNav />
                        <p className="font-medium mt-10">0.00 USDT</p>
                        <button 
                            onClick={() => navigate("/wallet/transfer")} 
                            className="bg-[#CB0881] px-20 py-2 mr-8 rounded-md text-white mt-5 md:mt-20"
                        >
                            Transfer
                        </button>
                        <button 
                            onClick={() => navigate("/wallet/spot/history")} 
                            className="bg-[#CB0881] px-20 py-2 mr-8 rounded-md text-white mt-5 md:mt-20"
                        >
                            History
                        </button>
                    </div>
                    <div className="w-full md:w-4/12 mt-10 md:mt-0">
                        <div className="bg-[#FCEEF8] p-5 rounded-md">
                            <div className="flex items-center justify-between">
                                <p className="text-md font-medium text-[#CB0881]">P2P Trading</p>
                                <img src={p2p} alt="P2P Trading Icon" />
                            </div>
                            <p className="mt-5">
                                Engage in peer-to-peer (P2P) trading on the TB20 network by connecting directly with other users to buy and sell assets without intermediaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
