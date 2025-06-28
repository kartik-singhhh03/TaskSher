import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Check, 
  Loader2,
  Shield,
  X
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { stripeConfig, type Product } from "@/stripe-config";
import { supabase } from "@/integrations/supabase/client";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [loading, setLoading] = useState(false);

  // Use the first product from config if none specified
  const selectedProduct = product || stripeConfig.products[0];

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error('Please sign in to continue');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: selectedProduct.priceId,
          mode: selectedProduct.mode,
          success_url: `${window.location.origin}/dashboard?success=true`,
          cancel_url: `${window.location.origin}/pricing?canceled=true`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error(error.message || 'Failed to start checkout process');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-background border-border">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">
              Upgrade to {selectedProduct.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Summary */}
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 border-[#D4AF37]/30">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg">{selectedProduct.name}</CardTitle>
              <div className="text-3xl font-bold text-[#D4AF37]">
                ${selectedProduct.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /{selectedProduct.interval}
                </span>
              </div>
              <CardDescription>{selectedProduct.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-sm">Unlimited automation credits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-sm">Custom automation templates</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-base">
                <CreditCard className="h-5 w-5" />
                <span>Secure Payment</span>
              </CardTitle>
              <CardDescription>
                Powered by Stripe. Your payment information is encrypted and secure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleCheckout} 
                disabled={loading}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Subscribe for ${selectedProduct.price}/{selectedProduct.interval}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Your payment information is secure and encrypted</span>
          </div>

          {/* Terms */}
          <div className="text-xs text-muted-foreground text-center">
            By subscribing, you agree to our Terms of Service and Privacy Policy. 
            You can cancel your subscription at any time.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}