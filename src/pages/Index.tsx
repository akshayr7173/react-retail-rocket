import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onSearch={handleSearch}
      />
      
      {!searchQuery && <HeroSection />}
      
      <main className="container mx-auto px-4 py-8">
        <ProductGrid searchQuery={searchQuery} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
