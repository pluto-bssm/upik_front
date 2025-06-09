import { Search } from "lucide-react";

export default function SearchBar(){
    return (
       <div className="flex items-center gap-2">
        <div className="relative">
          <input 
            type="text" 
            placeholder="가이드 검색창" 
            className="w-[325px] h-[44px] rounded-full border-1 border-[#80ABEF] pl-10 pr-4 text-[#80ABEF] mr-36 focus:outline-none focus:border-[#80ABEF] transition-colors" 
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#80ABEF]" size={20} />
        </div>
       </div>
    );
}

