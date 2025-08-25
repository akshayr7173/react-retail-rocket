import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";

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
      
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="text-lg font-bold text-foreground">EcomStore</span>
            </div>
            <p className="text-muted-foreground">
              Your one-stop shop for amazing products at great prices.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 EcomStore. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
