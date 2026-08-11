import Image from "next/image";

export default function Home() {
  // ข้อมูลจำลองสินค้าขายดี
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Croissant",
      price: "฿85",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Strawberry Shortcake",
      price: "฿140",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop",
      tag: "Fresh Daily",
    },
    {
      id: 3,
      name: "Sourdough Bread",
      price: "฿120",
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=600&auto=format&fit=crop",
      tag: "Artisan",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50/50 text-stone-800 font-sans selection:bg-amber-200">
      {/* Navbar Section */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-amber-900 flex items-center gap-2">
            <span>🥐</span> Sweet Bakes
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-stone-600">
            <a href="#home" className="hover:text-amber-700 transition-colors">หน้าแรก</a>
            <a href="#menu" className="hover:text-amber-700 transition-colors">เมนูทั้งหมด</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">เกี่ยวกับเรา</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">ติดต่อ</a>
          </nav>
          <button className="relative bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
            ตะกร้าสินค้า
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold tracking-wide">
            ✨ อบสดใหม่จากเตาทุกเช้า
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-900 leading-tight">
            เติมความหวานให้วันของคุณด้วย <span className="text-amber-700">เบเกอรี่โฮมเมด</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
            เราคัดสรรวัตถุดิบพรีเมียมจากธรรมชาติ ผ่านการอบด้วยความประณีต เพื่อส่งมอบรสชาติและความอร่อยที่อบอุ่นถึงมือคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#menu"
              className="flex items-center justify-center h-12 px-8 rounded-full bg-amber-700 text-white font-medium hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg"
            >
              สั่งซื้อเลย
            </a>
            <a
              href="#about"
              className="flex items-center justify-center h-12 px-8 rounded-full border border-stone-300 hover:border-amber-600 text-stone-700 hover:text-amber-700 font-medium transition-colors"
            >
              ดูเมนูแนะนำ
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
            alt="Freshly baked pastries"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900">เมนูขายดีประจำสัปดาห์</h2>
          <p className="text-stone-600 mt-2">เมนูยอดฮิตที่ลูกค้าของเราชื่นชอบมากที่สุด</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-800">{product.name}</h3>
                  <p className="text-amber-800 font-bold text-lg mt-1">{product.price}</p>
                </div>
                <button className="w-full py-3 rounded-xl bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-900 font-semibold transition-colors duration-200">
                  เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-amber-500 font-semibold text-lg">🥐 Sweet Bakes Bakery</p>
          <p className="text-sm">เปิดบริการทุกวัน 07:00 - 19:00 น. | โทร: 02-XXX-XXXX</p>
          <p className="text-xs text-stone-500">© 2026 Sweet Bakes Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
