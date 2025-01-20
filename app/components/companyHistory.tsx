export default function CompanyPhilosophy() {
    return (
      <div className="relative min-h-[400px] w-full overflow-hidden">
        {/* Background with geometric pattern effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white"
          style={{
            // backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/diagonal-lines.svg)`,
            backgroundImage: './diagonal-lines.svg',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4">
              <span className="w-1 h-8 bg-amber-400"/>
              企業理念
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                SESを中心とした、技術支援をしております。
              </p>
              <p>
                お客様のニーズに合ったスタッフ・技術の紹介をさせていただきます。
              </p>
              <p>
                これまでの経験を活かして、高い技術力を元に、アプリ開発〜インフラまで幅広く対応が可能です。
              </p>
              <p>
                特にクラウド環境での開発など最新技術を得意としております。
              </p>
              <p>
                アプリ開発技術向上のためのオンラインサービスと連動して、
              </p>
              <p>
                プログラミング教育・技術スタッフの提供の相互作用を持ったサイクルを実現してまります。
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }