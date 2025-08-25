import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
  isFlashSale?: boolean;
  flashSalePrice?: number;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

const ProductCard = ({ 
  product, 
  isFlashSale = false, 
  flashSalePrice,
  onAddToCart,
  onAddToWishlist,
  onBuyNow 
}: ProductCardProps) => {
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(product);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.title} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const displayPrice = isFlashSale && flashSalePrice ? flashSalePrice : product.price;
  const originalPrice = product.price;
  const discountPercentage = isFlashSale && flashSalePrice 
    ? Math.round(((originalPrice - flashSalePrice) / originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Flash Sale Badge */}
      {isFlashSale && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-gradient-flash text-flash-sale-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse shadow-md">
            🔥 -{discountPercentage}% OFF
          </div>
        </div>
      )}

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          isWishlisted && "opacity-100"
        )}
        onClick={handleWishlistClick}
      >
        <Heart 
          className={cn(
            "h-5 w-5 transition-colors",
            isWishlisted ? "fill-flash-sale text-flash-sale" : "text-muted-foreground hover:text-flash-sale"
          )} 
        />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.title}
          className={cn(
            "w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {product.category}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium text-card-foreground ml-1">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-card-foreground">
            ${displayPrice.toFixed(2)}
          </span>
          {isFlashSale && flashSalePrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <div className="flex space-x-2">
            <Button
              variant="cart"
              size="sm"
              className="flex-1"
              onClick={() => {
                onAddToCart?.(product);
                toast({
                  title: "Added to Cart",
                  description: `${product.title} has been added to your cart.`,
                });
              }}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              variant={isFlashSale ? "flash-sale" : "buy"}
              size="sm"
              className="flex-1"
              onClick={() => onBuyNow?.(product)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;