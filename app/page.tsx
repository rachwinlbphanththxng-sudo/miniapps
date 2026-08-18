'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  badge: string;
  image: string;
}

export default function SweetBakesPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState('');

  const bakeryItems: Product[] = [
    {
      id: 1,
      name: "Fresh Croissant",
      price: 85,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
    },
    {
      id: 2,
      name: "Strawberry Shortcake",
      price: 140,
      badge: "Fresh Daily",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
    },
    {
      id: 3,
      name: "Sourdough Bread",
      price: 120,
      badge: "Artisan",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    }
  ];

  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
    setNotification(`เพิ่ม ${item.name} ลงตะกร้าแล้ว!`);
    setTimeout(() => setNotification(''), 2000);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert('กรุณาเลือกเบเกอรีก่อนทำการสั่งซื้อครับ');
      return;
    }
    alert('สั่งซื้อสำเร็จ! ระบบได้รับออเดอร์เรียบร้อยแล้ว 🥐');
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#fffdf9', color: '#292524', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Kanit, sans-serif' }}>
      
      {/* แจ้งเตือนมุมขวาบนเวลาเพิ่มสินค้า */}
      {notification && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: '#d97706', color: 'white', padding: '12px 20px', borderRadius: '8px', zIndex: 3000, boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontWeight: 500 }}>
          {notification}
        </div>
      )}

      {/* HEADER */}
      <header style={{ backgroundColor: '#fffdf9', borderBottom: '1px solid #fef3c7', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '22px', fontWeight: 700, color: '#451a03' }}>
            <span style={{ color: '#d97706' }}>🥐</span>
            <span>Sweet Bakes</span>
          </div>
          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', fontSize: '15px' }}>
            <li><a href="#" style={{ textDecoration: 'none', color: '#d97706', fontWeight: 500 }}>หน้าแรก</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#292524' }}>เมนูทั้งหมด</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#292524' }}>เกี่ยวกับเรา</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#292524' }}>ติดต่อ</a></li>
          </ul>
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{ backgroundColor: '#d97706', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '30px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            🛒 ตะกร้าสินค้า ({cart.length})
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#451a03', marginBottom: '8px' }}>เมนูขายดีประจำสัปดาห์</h2>
          <p style={{ fontSize: '15px', color: '#78716c' }}>เมนูยอดฮิตที่ลูกค้าของเราชื่นชอบมากที่สุด</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {bakeryItems.map((item) => (
            <div key={item.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid #fde68a', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255, 255, 255, 0.9)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 500, color: '#451a03' }}>
                  {item.badge}
                </span>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#451a03', marginBottom: '12px' }}>{item.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '15px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#d97706' }}>฿{item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    style={{ backgroundColor: '#451a03', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}
                  >
                    + เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CART DRAWER */}
      <div style={{ position: 'fixed', top: 0, right: isCartOpen ? '0' : '-380px', width: '350px', height: '100%', background: 'white', boxShadow: '-5px 0 25px rgba(0,0,0,0.1)', zIndex: 2000, transition: 'right 0.3s ease', padding: '24px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f3f4f6', paddingBottom: '15px', marginBottom: '15px' }}>
          <h3 style={{ color: '#451a03' }}>🛒 ตะกร้าสินค้า</h3>
          <span style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }} onClick={() => setIsCartOpen(false)}>✕</span>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#a8a29e', marginTop: '30px' }}>ไม่มีสินค้าในตะกร้า</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '12px', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px dashed #e5e7eb', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#451a03' }}>{item.name}</div>
                  <div style={{ color: '#d97706', fontWeight: 'bold', fontSize: '14px' }}>฿{item.price}</div>
                </div>
                <span style={{ color: '#ef4444', cursor: 'pointer' }} onClick={() => removeFromCart(index)}>🗑️</span>
              </div>
            ))
          )}
        </div>

        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '16px', color: '#451a03' }}>
            <span>ราคารวมทั้งหมด:</span>
            <span style={{ color: '#d97706' }}>฿{totalPrice}</span>
          </div>
          <button 
            onClick={checkout}
            style={{ width: '100%', backgroundColor: '#d97706', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', cursor: 'pointer', marginTop: '12px' }}
          >
            สั่งซื้อสินค้า
          </button>
        </div>
      </div>
    </div>
  );
}
