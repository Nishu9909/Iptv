import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";

const SearchBar = ({ onSearch, isLoading }: { onSearch: (q: string) => void, isLoading: boolean }) => {
  const [q, setQ] = useState("");

  const handleSearch = () => {
    if (q.trim()) onSearch(q);
  };

  return (
    <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSearch()}
        placeholder="Search..."
        style={{
          width: "100%",
          padding: "14px 20px",
          paddingRight: "50px",
          borderRadius: "30px",
          border: "1px solid #333",
          background: "#121212",
          color: "white",
          fontSize: "16px",
          outline: "none",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
        }}
      />
      <button 
        onClick={handleSearch}
        disabled={isLoading}
        style={{
          position: "absolute",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "#aaa",
          cursor: "pointer",
          padding: "8px"
        }}
      >
        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
      </button>
      <style>{`
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default SearchBar;