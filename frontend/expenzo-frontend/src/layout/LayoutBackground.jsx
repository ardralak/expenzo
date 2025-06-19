import "../styles/LayoutBackround.css"
import { PiggyBank, IndianRupee, ShoppingCart, Coins, BarChart3, Sparkles,ChartNoAxesCombined } from 'lucide-react';

function LayoutBackground() {
  return (
    <div className="animated-bg">
      <div className="gradient-overlay"></div>
      <Coins className="bg-icon coin" />
      <BarChart3 className="bg-icon graph" />
      <ChartNoAxesCombined className="bg-icon chart" />
      <PiggyBank className="bg-icon piggy" />
      <ShoppingCart className="bg-icon shopping" />
      <IndianRupee className="bg-icon rupee" />
      <Sparkles className="bg-icon sparkle sparkle1" />
      <Sparkles className="bg-icon sparkle sparkle2" />
    </div>
  );
}

export default LayoutBackground;