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
      badge: "⭐ Best Seller",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
    },
    {
      id: 2,
      name: "Strawberry Shortcake",
      price: 140,
      badge: "🍓 Fresh Daily",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
    },
    {
      id: 3,
      name: "Sourdough Bread",
      price: 120,
      badge: "🥖 Artisan",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    }
  ];

  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
    setNotification(`✨ เพิ่ม ${item.name} ลงตะกร้าแล้ว!`);
    setTimeout(() => setNotification(''), 2500);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert('⚠️ กรุณาเลือกเบเกอรีก่อนทำการสั่งซื้อนะคะ');
      return;
    }
    alert('🎉 สั่งซื้อสำเร็จ! ร้านกำลังเตรียมอบความอร่อยให้คุณน้า 🥐');
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#fffdf9', color: '#292524', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Kanit, sans-serif' }}>
      
      {/* แจ้งเตือนมุมขวาบนสุดน่ารักๆ */}
      {notification && (
        <div style={{ 
          position: 'fixed', top: '24px', right: '24px', 
          backgroundColor: '#451a03', color: '#fef3c7', 
          padding: '14px 24px', borderRadius: '50px', zIndex: 3000, 
          boxShadow: '0 10px 25px rgba(69, 26, 3, 0.15)', fontWeight: 500,
          animation: 'fadeIn 0.3s ease'
        }}>
          {notification}
        </div>
      )}

      {/* HEADER */}
      <header style={{ backgroundColor: 'rgba(255, 253, 249, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #fef3c7', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: 700, color: '#451a03' }}>
            <span style={{ fontSize: '28px' }}>🥐</span>
            <span style={{ background: 'linear-gradient(45deg, #451a03, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sweet Bakes</span>
          </div>
          <ul style={{ display: 'flex', gap: '35px', listStyle: 'none', fontSize: '15px', fontWeight: 400 }}>
            <li><a href="#" style={{ textDecoration: 'none', color: '#d97706', fontWeight: 600 }}>หน้าแรก</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#78716c', transition: 'color 0.2s' }}>เมนูทั้งหมด</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#78716c', transition: 'color 0.2s' }}>เกี่ยวกับเรา</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#78716c', transition: 'color 0.2s' }}>ติดต่อ</a></li>
          </ul>
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{ backgroundColor: '#d97706', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '50px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🛒 ตะกร้าสินค้า ({cart.length})
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, display: 'inline-block', marginBottom: '12px' }}>
            ✨ อบสดใหม่ทุกวันจากเตา
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#451a03', marginBottom: '10px' }}>เมนูขายดีประจำสัปดาห์</h2>
          <p style={{ fontSize: '16px', color: '#78716c' }}>เลือกความอร่อยที่คุณชื่นชอบ แล้วเติมความสุขให้วันของคุณกันเถอะ</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
          {bakeryItems.map((item) => (
            <div key={item.id} style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid #fef3c7', boxShadow: '0 10px 30px rgba(69, 26, 3, 0.04)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(69, 26, 3, 0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(69, 26, 3, 0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: '#451a03', zIndex: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  {item.badge}
                </span>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div style={{ fontSize: '20px', fontWeight: 600, color: '#451a03', marginBottom: '8px' }}>{item.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '15px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#a8a29e', display: 'block' }}>ราคา</span>
                    <span style={{ fontSize: '22px', fontWeight: 700, color: '#d97706' }}>฿{item.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    style={{ backgroundColor: '#451a03', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#451a03'}
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
      <div style={{ 
        position: 'fixed', top: 0, right: isCartOpen ? '0' : '-420px', 
        width: '380px', height: '100%', background: 'white', 
        boxShadow: '-10px 0 30px rgba(0,0,0,0.08)', zIndex: 2000, 
        transition: 'right 0.4s cubic-bezier(0.16, 1, 0.3, 1)', padding: '30px', 
        display: 'flex', flexDirection: 'column' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #fef3c7', paddingBottom: '18px', marginBottom: '20px' }}>
          <h3 style={{ color: '#451a03', fontSize: '20px', fontWeight: 700 }}>🛒 ตะกร้าสินค้าของคุณ</h3>
          <span style={{ cursor: 'pointer', fontSize: '18px', color: '#78716c', background: '#f5f5f4', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }} onClick={() => setIsCartOpen(false)}>✕</span>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '80px', color: '#a8a29e' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '12px' }}>🥐</span>
              <p>ยังไม่มีเมนูในตะกร้าเลย<br/>ลองเลือกดูความอร่อยได้เลยนะคะ</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '14px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px dashed #fef3c7', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '65px', height: '65px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#451a03' }}>{item.name}</div>
                  <div style={{ color: '#d97706', fontWeight: 700, fontSize: '15px', marginTop: '2px' }}>฿{item.price}</div>
                </div>
                <span style={{ color: '#ef4444', cursor: 'pointer', padding: '8px', fontSize: '16px' }} onClick={() => removeFromCart(index)}>🗑️</span>
              </div>
            ))
          )}
        </div>

        <div style={{ borderTop: '1px solid #fef3c7', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '18px', color: '#451a03', marginBottom: '16px' }}>
            <span>ราคารวมทั้งหมด:</span>
            <span style={{ color: '#d97706' }}>฿{totalPrice}</span>
          </div>
          <button 
            onClick={checkout}
            style={{ width: '100%', backgroundColor: '#d97706', color: 'white', border: 'none', padding: '14px', borderRadius: '14px', fontWeight: 600, fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b45309'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
          >
            ยืนยันการสั่งซื้อสินค้า 🛍️
          </button>
        </div>
      </div>
    </div>
  );
}
