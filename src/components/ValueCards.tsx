import React from 'react';
import { Smartphone, Zap, Wallet, ChevronRight } from 'lucide-react';

interface ValueCardItem {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  targetId: string;
}

export const ValueCards: React.FC = () => {
  const cards: ValueCardItem[] = [
    {
      icon: <Smartphone className="w-4 h-4" />,
      iconBg: "bg-stone-900 text-white",
      iconColor: "text-white",
      title: "Pulsa & Kuota All Operator",
      subtitle: "Telkomsel, Indosat, XL, Tri, Smartfren langsung masuk",
      targetId: "#projects",
    },
    {
      icon: <Zap className="w-4 h-4 fill-amber-400 text-stone-950" />,
      iconBg: "bg-amber-400 text-stone-950",
      iconColor: "text-stone-950",
      title: "Token Listrik & Bayar PLN",
      subtitle: "20 digit nomor token resmi PLN dikirim kilat bebas antre",
      targetId: "#projects",
    },
    {
      icon: <Wallet className="w-4 h-4" />,
      iconBg: "bg-stone-100 text-stone-900 border border-stone-200",
      iconColor: "text-stone-900",
      title: "Top-Up E-Wallet & Kirim Uang",
      subtitle: "DANA, GoPay, OVO, ShopeePay & transfer ke seluruh bank",
      targetId: "#projects",
    },
  ];

  return (
    <section className="relative z-20 -mt-4 mb-16 md:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.targetId}
              className="bg-white/95 backdrop-blur-xs hover:bg-white p-5 rounded-2xl border border-stone-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105 ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900 font-display group-hover:text-amber-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-stone-50 group-hover:bg-amber-100/70 flex items-center justify-center text-stone-400 group-hover:text-amber-700 transition-colors shrink-0 ml-2">
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
