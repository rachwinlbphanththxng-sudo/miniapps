'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  badge: string;
  image: string;
  character: string;
}

export default function SweetBakesPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const bakeryItems: Product[] = [
    {
      id: 1,
      name: "เค้กมะพร้าวอ่อน",
      price: 99,
      badge: "🥥 หอมละมุน",
      character: "🧸 น้องหมีละมุน",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
    },
    {
      id: 2,
      name: "เค้กช็อกโกแลต",
      price: 110,
      badge: "🍫 เข้มข้นสะใจ",
      character: "🐰 น้องต่ายช็อกโก",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"
    },
    {
      id: 3,
      name: "เค้กเนยสด",
      price: 99,
      badge: "🧈 หอมเนยแท้",
      character: "🐥 น้องเจี๊ยบเนยสด",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400"
    },
    {
      id: 4,
      name: "เค้กสตรอว์เบอร์รี",
      price: 110,
      badge: "🍓 สตรอว์เบอร์รีสด",
      character: "🐱 น้องแมวสตรอว์",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
    },
    {
      id: 5,
      name: "คัพเค้ก",
      price: 110,
      badge: "🧁 คัพเค้กละมุน",
      character: "🐼 น้องแพนด้าคัพเค้ก",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=400"
    },
    {
      id: 6,
      name: "ครัวซองต์เนยสด",
      price: 85,
      badge: "🥐 อบสดจากเตา",
      character: "🦊 น้องจิ้งจอกครัวซองต์",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
    }
  ];

  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
    setNotification(`💛 เพิ่ม ${item.name} (${item.character}) ลงตะกร้าแล้วค่า!`);
    setTimeout(() => setNotification(''), 2500);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert('⚠️ ยังไม่ได้เลือกเค้กเลยน้า เลือกความอร่อยใส่ตะกร้าก่อนก๊าบ!');
      return;
    }
    alert('🎉 เย้! สั่งซื้อสำเร็จแล้ว ร้านกำลังเตรียมเค้กน่ารักๆ ส่งให้คุณลูกค้านะคะ 💛🍰');
    setCart([]);
    setIsCartOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNotification('🏠 คุณอยู่ที่หน้าแรกแล้วค่า!');
    setTimeout(() => setNotification(''), 2000);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('menu-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setNotification('🍰 ยินดีต้อนรับสู่เมนูเค้กแสนอร่อย!');
    setTimeout(() => setNotification(''), 2000);
  };

  return (
    <div style={{ backgroundColor: '#fffef0', color: '#451a03', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Kanit, sans-serif' }}>
      
      {notification && (
        <div style={{ 
          position: 'fixed', top: '24px', right: '24px', 
          backgroundColor: '#fef08a', color: '#713f12', 
          padding: '14px 24px', borderRadius: '50px', zIndex: 3000, 
          boxShadow: '0 10px 25px rgba(250, 204, 21, 0.3)', fontWeight: 600,
          border: '2px solid #fde047'
        }}>
          {notification}
        </div>
      )}

      <header style={{ backgroundColor: 'rgba(254, 240, 138, 0.85)', backdropFilter: 'blur(10px)', borderBottom: '2px solid #fef08a', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(250, 204, 21, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: 700, color: '#713f12' }}>
            <span style={{ fontSize: '28px' }}>🐥</span>
            <span style={{ background: 'linear-gradient(45deg, #713f12, #ca8a04)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sweet Bakes Cafe</span>
          </div>
          <ul style={{ display: 'flex', gap: '35px', listStyle: 'none', fontSize: '15px', fontWeight: 500, alignItems: 'center' }}>
            <li><a href="#" onClick={scrollToTop} style={{ textDecoration: 'none', color: '#ca8a04', fontWeight: 700, cursor: 'pointer' }}>🏠 หน้าแรก</a></li>
            <li><a href="#" onClick={handleMenuClick} style={{ textDecoration: 'none', color: '#854d0e', cursor: 'pointer', fontWeight: 700 }}>🍰 เมนูเค้ก</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert('🧸 Sweet Bakes Cafe คาเฟ่เค้กโฮมเมดอบสดใหม่ทุกวันด้วยวัตถุดิบพรีเมียม เพื่อรอยยิ้มของคุณลูกค้าค่ะ!'); }} style={{ textDecoration: 'none', color: '#854d0e', cursor: 'pointer' }}>🧸 เกี่ยวกับเรา</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }} style={{ textDecoration: 'none', color: '#854d0e', cursor: 'pointer' }}>📞 ติดต่อเรา</a></li>
          </ul>
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{ backgroundColor: '#eab308', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '50px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(234, 179, 8, 0.4)' }}
          >
            🛒 ตะกร้าของฉัน ({cart.length})
          </button>
        </div>
      </header>

      <main id="menu-section" style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ backgroundColor: '#fef9c3', color: '#854d0e', padding: '8px 20px', borderRadius: '30px', fontSize: '14px', fontWeight: 700, display: 'inline-block', marginBottom: '12px', border: '1px solid #fef08a' }}>
            🌟 คาเฟ่เค้กโฮมเมดสุดน่ารัก สีเหลืองละมุนใจ
          </span>
          <h2 style={{ fontSize: '38px', fontWeight: 700, color: '#713f12', marginBottom: '10px' }}>เมนูเค้กและเบเกอรีแสนอร่อย</h2>
          <p style={{ fontSize: '16px', color: '#854d0e' }}>เลือกเค้กชิ้นโปรดที่มีเพื่อนๆ ตัวการ์ตูนคอยเสิร์ฟความอร่อยให้คุณได้เลยค่า!</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
          {bakeryItems.map((item) => (
            <div key={item.id} style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', border: '2px solid #fef08a', boxShadow: '0 10px 30px rgba(250, 204, 21, 0.1)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(254, 240, 138, 0.95)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, color: '#713f12', zIndex: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  {item.badge}
                </span>
                <span style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(255, 255, 255, 0.95)', padding: '4px 12px', borderRadius: '15px', fontSize: '11px', fontWeight: 600, color: '#ca8a04', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  {item.character}
                </span>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#713f12', marginBottom: '4px' }}>{item.name}</div>
                  <div style={{ fontSize: '13px', color: '#a16207' }}>✨ การันตีความอร่อยโดย {item.character}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#ca8a04', display: 'block' }}>ราคาพิเศษ</span>
                    <span style={{ fontSize: '22px', fontWeight: 700, color: '#eab308' }}>฿{item.price}.-</span>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    style={{ backgroundColor: '#713f12', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(113, 26, 3, 0.2)' }}
                  >
                    + ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal ติดต่อเรา */}
      {isContactOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 4000, backdropFilter: 'blur(5px)' }}>
          <div style={{ background: '#fffef0', padding: '35px', borderRadius: '24px', width: '400px', boxShadow: '0 20px 40px rgba(250, 204, 21, 0.3)', border: '2px solid #fef08a', position: 'relative', textAlign: 'center' }}>
            <span style={{ position: 'absolute', top: '16px', right: '16px', cursor: 'pointer', fontSize: '16px', color: '#713f12', background: '#fef08a', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }} onClick={() => setIsContactOpen(false)}>✕</span>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '10px' }}>📞</span>
            <h3 style={{ color: '#713f12', fontSize: '22px', fontWeight: 700, marginBottom: '15px' }}>ติดต่อเรา Sweet Bakes Cafe</h3>
            <div style={{ textAlign: 'left', background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #fef08a', fontSize: '14px', color: '#713f12', lineHeight: '1.8' }}>
              <p>📍 <b>ที่อยู่:</b> 99/9 ถนนสุขใจ แขวงเบเกอรี เขตอร่อย กรุงเทพฯ</p>
              <p>☎️ <b>โทรศัพท์:</b> 02-123-4567</p>
              <p>💬 <b>Line Official:</b> @sweetbakes</p>
              <p>⏰ <b>เวลาเปิด-ปิด:</b> เปิดทุกวัน 09:00 - 20:00 น.</p>
            </div>
            <button 
              onClick={() => setIsContactOpen(false)}
              style={{ marginTop: '20px', backgroundColor: '#eab308', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}

      {/* Slide ตะกร้าสินค้า */}
      <div style={{ 
        position: 'fixed', top: 0, right: isCartOpen ? '0' : '-420px', 
        width: '380px', height: '100%', background: '#fffef0', 
        boxShadow: '-10px 0 30px rgba(250, 204, 21, 0.15)', zIndex: 2000, 
        transition: 'right 0.4s cubic-bezier(0.16, 1, 0.3, 1)', padding: '30px', 
        display: 'flex', flexDirection: 'column', borderLeft: '2px solid #fef08a'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #fef08a', paddingBottom: '18px', marginBottom: '20px' }}>
          <h3 style={{ color: '#713f12', fontSize: '20px', fontWeight: 700 }}>💛 ตะกร้าเค้กของคุณ</h3>
          <span style={{ cursor: 'pointer', fontSize: '16px', color: '#713f12', background: '#fef08a', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }} onClick={() => setIsCartOpen(false)}>✕</span>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '80px', color: '#a16207' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '12px' }}>🐥</span>
              <p>ยังไม่มีเค้กในตะกร้าเลยน้า<br/>เลือกเค้กที่ชอบให้ตัวการ์ตูนเสิร์ฟได้เลยค่า!</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '14px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px dashed #fef08a', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '65px', height: '65px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#713f12' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#ca8a04' }}>{item.character}</div>
                  <div style={{ color: '#eab308', fontWeight: 700, fontSize: '15px', marginTop: '2px' }}>฿{item.price}.-</div>
                </div>
                <span style={{ color: '#ef4444', cursor: 'pointer', padding: '8px', fontSize: '16px' }} onClick={() => removeFromCart(index)}>🗑️</span>
              </div>
            ))
          )}
        </div>

        <div style={{ borderTop: '2px solid #fef08a', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '18px', color: '#713f12', marginBottom: '16px' }}>
            <span>ยอดรวมทั้งหมด:</span>
            <span style={{ color: '#ca8a04' }}>฿{totalPrice}.-</span>
          </div>
          <button 
            onClick={checkout}
            style={{ width: '100%', backgroundColor: '#eab308', color: 'white', border: 'none', padding: '14px', borderRadius: '14px', fontWeight: 700, fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(234, 179, 8, 0.4)' }}
          >
            ยืนยันการสั่งซื้อเค้ก 🛍️✨
          </button>
        </div>
      </div>
    </div>
  );
}
