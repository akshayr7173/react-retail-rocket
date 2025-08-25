import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Shop the Latest
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Trends</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices. From electronics to fashion, 
              we have everything you need.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="buy" size="lg" className="group">
              <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Flash Sales
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Flash Deals</h3>
              <p className="text-sm text-muted-foreground">Limited time offers</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-flash rounded-full flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-flash-sale-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;