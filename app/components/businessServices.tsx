import Image from "next/image"
import { Card, CardHeader, CardContent } from "@mui/material"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
}

function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="bg-blue-600 text-white p-3 text-center font-medium">
          {title}
        </div>
      </CardHeader>
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export default function BusinessServices() {
  const services = [
    {
      title: "システムエンジニアリングサービス事業",
      description: "IT分野における様々なシステムの開発・設計・運用に至るまで、お客様のニーズに合わせたエンジニアリングサービスをご提供いたします。",
      imageSrc: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "受託開発事業",
      description: "WEBアプリ開発、Cloud環境へのデータ移行など、幅広い分野でお客さまのご要望にお応えいたします。",
      imageSrc: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "プログラミング教育事業",
      description: "IT業界への転職希望者向けに、現役のエンジニアよりオンラインでのプログラミングの授業を提供いたします。",
      imageSrc: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "インドアゴルフスクール運営",
      description: "2023年7月より、神奈川県平塚市より、インドアゴルフスクールを開業予定です。",
      imageSrc: "/placeholder.svg?height=400&width=600"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4">
        <span className="w-1 h-8 bg-amber-400"/>
        事業内容
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

